"use client";

import { useEffect, useRef } from "react";

const NODE_COUNT = 52;

export default function BlockchainNetwork() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse = { x: 0.62, y: 0.42 };
    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame;

    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.00018,
      vy: (Math.random() - 0.5) * 0.00018,
      r: i % 7 === 0 ? 3.2 : 1.6 + Math.random() * 1.4,
      accent: i % 9 === 0,
    }));

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.hypot(dx, dy) || 1;
        node.vx += (dx / dist) * 0.000012;
        node.vy += (dy / dist) * 0.000012;
        node.vx *= 0.992;
        node.vy *= 0.992;
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0.04 || node.x > 0.96) node.vx *= -1;
        if (node.y < 0.06 || node.y > 0.94) node.vy *= -1;
        node.x = Math.min(0.97, Math.max(0.03, node.x));
        node.y = Math.min(0.96, Math.max(0.04, node.y));
      });

      const maxDist = Math.min(width, height) * 0.18;

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const px = (a.x - b.x) * width;
          const py = (a.y - b.y) * height;
          const d = Math.hypot(px, py);
          if (d > maxDist) continue;
          const alpha = (1 - d / maxDist) * 0.22;
          ctx.strokeStyle = `rgba(186, 206, 239, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x * width, a.y * height);
          ctx.lineTo(b.x * width, b.y * height);
          ctx.stroke();
        }
      }

      nodes.forEach((node) => {
        const x = node.x * width;
        const y = node.y * height;
        ctx.beginPath();
        ctx.arc(x, y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = node.accent ? "#FFC82E" : "#8EACCD";
        ctx.fill();
        if (node.r > 2.6) {
          ctx.beginPath();
          ctx.arc(x, y, node.r + 8, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(27, 117, 208, 0.28)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
