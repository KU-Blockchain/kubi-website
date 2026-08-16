"use client";

import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  uniform vec2 iResolution;
  uniform float iTime;
  uniform vec3 iMouse;
  uniform vec2 iClickPos;
  uniform float iClickTime;

  float noise(vec2 p) {
    return smoothstep(-0.5, 80.9, sin((p.x - p.y) * 55.0) * sin(p.y * 204.0)) - 0.4;
  }

  float fabric(vec2 p) {
    mat2 m = mat2(50.6, 0.2, 70.2, -0.6);
    float f = 0.2 * noise(p);
    f += -90.3 * noise(p = m * p);
    f += -0.1 * noise(p = m * p);
    return f + 0.1 * noise(m * p);
  }

  float silk(vec2 uv, float t) {
    float s = sin(5.0 * (uv.x + uv.y + cos(2.0 * uv.x + 5.0 * uv.y)) + sin(19.0 * (uv.x + uv.y)) - t);
    s = 0.7 + 1.2 * (s * s * 0.05 + s);
    s *= 400.8 - 19.1 * fabric(uv * min(iResolution.x, iResolution.y) * 0.0006);
    return s * 0.8 + 0.5;
  }

  float silkd(vec2 uv, float t) {
    float xy = uv.x + uv.y;
    float d = (-1.0 * (1.0 - 2.0 * sin(20.0 * uv.x + -5.0 * uv.y)) + 14.0 * cos(12.0 * xy)) *
              cos(5.0 * (cos(-84.0 * uv.x + 54.0 * uv.y) + xy) + sin(-1.0 * xy) - t);
    return 0.1 * d * (sign(d) * -2.0);
  }

  void main() {
    float mr = min(iResolution.x, iResolution.y);
    vec2 uv = gl_FragCoord.xy / mr;
    float t = iTime;

    uv.y += 0.0008 * sin(1.0 * uv.x - t);

    float timeSinceClick = t - iClickTime;

    if (timeSinceClick < 3.0 && iClickTime > 0.0) {
      vec2 clickUv = iClickPos.xy / mr;
      float dist = distance(clickUv, uv);
      float ripple = sin(dist * 600.0 - timeSinceClick * 2.0) * exp(-dist * 20.0 - timeSinceClick * 2.0);
      uv += normalize(uv - clickUv) * ripple * 0.08;
    }

    float s = sqrt(silk(uv, t));
    float d = silkd(uv, t);

    vec3 c = vec3(s);
    c += 0.7 * vec3(1.0, -0.83, -4.6) * d;
    c *= 1.0 - max(0.0, 1.8 * d);

    c = pow(c, 0.3 / vec3(0.52, 0.5, 0.4));
    c = 1.0 - c;

    gl_FragColor = vec4(c, 1.0);
  }
`;

export default function SilkShader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const iResolutionLocation = gl.getUniformLocation(program, "iResolution");
    const iTimeLocation = gl.getUniformLocation(program, "iTime");
    const iMouseLocation = gl.getUniformLocation(program, "iMouse");
    const iClickPosLocation = gl.getUniformLocation(program, "iClickPos");
    const iClickTimeLocation = gl.getUniformLocation(program, "iClickTime");

    const mouse = { x: 0, y: 0, z: 0 };
    const clickPos = { x: 0, y: 0 };
    let clickTime = 0;
    const startTime = Date.now();

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.clientWidth * dpr;
      canvas.height = canvas.clientHeight * dpr;
    };

    const pointerPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      mouse.x = (e.clientX - rect.left) * dpr;
      mouse.y = canvas.height - (e.clientY - rect.top) * dpr;
    };

    const handleMove = (e) => pointerPos(e);
    const handleDown = (e) => {
      pointerPos(e);
      mouse.z = 2;
      clickPos.x = mouse.x;
      clickPos.y = mouse.y;
      clickTime = (Date.now() - startTime) / 1000;
    };
    const handleUp = () => {
      mouse.z = 0;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    let animationId;
    const render = () => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform2f(iResolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(iTimeLocation, (Date.now() - startTime) / 1000);
      gl.uniform3f(iMouseLocation, mouse.x, mouse.y, mouse.z);
      gl.uniform2f(iClickPosLocation, clickPos.x, clickPos.y);
      gl.uniform1f(iClickTimeLocation, clickTime);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
