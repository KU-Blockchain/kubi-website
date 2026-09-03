"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";

// Palette matches the original RubiksCube — swap HeroCube back to variant="classic" to restore.
export const CUBE_PALETTE = {
  gold: "#9A7B2F",
  crimson: "#6E2A32",
  steel: "#5C738C",
  navy: "#16325C",
  slate: "#2E3D52",
  ink: "#0E1C38",
};

const SPREAD = 1.15;
const CENTER = 50;

const spread = (value) => CENTER + (value - CENTER) * SPREAD;

const NODES = [
  { id: "gold", color: CUBE_PALETTE.gold, x: spread(50), y: spread(14), delay: "0s" },
  { id: "crimson", color: CUBE_PALETTE.crimson, x: spread(16), y: spread(40), delay: "-1.4s" },
  { id: "steel", color: CUBE_PALETTE.steel, x: spread(50), y: spread(44), delay: "-2.8s" },
  { id: "navy", color: CUBE_PALETTE.navy, x: spread(84), y: spread(40), delay: "-4.2s" },
  { id: "slate", color: CUBE_PALETTE.slate, x: spread(30), y: spread(80), delay: "-5.6s" },
  { id: "ink", color: CUBE_PALETTE.ink, x: spread(70), y: spread(80), delay: "-7s" },
];

const EDGES = [
  ["gold", "crimson"],
  ["gold", "steel"],
  ["gold", "navy"],
  ["crimson", "steel"],
  ["steel", "navy"],
  ["crimson", "slate"],
  ["steel", "slate"],
  ["steel", "ink"],
  ["navy", "ink"],
  ["slate", "ink"],
];

const nodeMap = Object.fromEntries(NODES.map((node) => [node.id, node]));

const ZERO = { x: 0, y: 0 };

function SolidMiniCube({ color, delay }) {
  const faces = ["front", "back", "left", "right", "top", "bottom"];

  return (
    <div
      className="solid-mini-cube"
      style={{ "--mini-spin-delay": delay }}
    >
      <div className="solid-mini-cube__inner">
        {faces.map((face) => (
          <div
            key={face}
            className={`solid-mini-cube__face solid-mini-cube__face--${face}`}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}

export default function BlockchainCubeNetwork() {
  const rootRef = useRef(null);
  const dragRef = useRef(null);
  const offsetsRef = useRef({});
  const springRefs = useRef({});
  const [offsets, setOffsets] = useState({});
  const [draggingId, setDraggingId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const syncOffsets = useCallback((next) => {
    offsetsRef.current = next;
    setOffsets(next);
  }, []);

  useEffect(() => {
    const onVisibility = () => setIsPaused(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(
    () => () => {
      Object.values(springRefs.current).forEach((controls) => controls?.stop?.());
    },
    []
  );

  const getPos = useCallback(
    (id) => {
      const base = nodeMap[id];
      const offset = offsets[id] || ZERO;
      return { x: base.x + offset.x, y: base.y + offset.y };
    },
    [offsets]
  );

  const springHome = useCallback(
    (id, from, velocity = ZERO) => {
      springRefs.current[id]?.stop?.();

      let latestX = from.x;
      let latestY = from.y;
      let finished = 0;

      const finishOne = () => {
        finished += 1;
        if (finished < 2) return;
        const next = { ...offsetsRef.current };
        delete next[id];
        syncOffsets(next);
        delete springRefs.current[id];
      };

      const ax = animate(from.x, 0, {
        type: "spring",
        stiffness: 95,
        damping: 14,
        mass: 0.9,
        velocity: velocity.x,
        onUpdate: (x) => {
          latestX = x;
          syncOffsets({
            ...offsetsRef.current,
            [id]: { x: latestX, y: latestY },
          });
        },
        onComplete: finishOne,
      });

      const ay = animate(from.y, 0, {
        type: "spring",
        stiffness: 95,
        damping: 14,
        mass: 0.9,
        velocity: velocity.y,
        onUpdate: (y) => {
          latestY = y;
          syncOffsets({
            ...offsetsRef.current,
            [id]: { x: latestX, y: latestY },
          });
        },
        onComplete: finishOne,
      });

      springRefs.current[id] = {
        stop: () => {
          ax.stop();
          ay.stop();
        },
      };
    },
    [syncOffsets]
  );

  const onPointerDown = (event, id) => {
    if (event.button != null && event.button !== 0) return;

    springRefs.current[id]?.stop?.();
    const rect = rootRef.current?.getBoundingClientRect();
    if (!rect) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      id,
      startX: event.clientX,
      startY: event.clientY,
      origin: offsetsRef.current[id] || ZERO,
      width: rect.width,
      height: rect.height,
      lastX: event.clientX,
      lastY: event.clientY,
      lastTime: performance.now(),
      velocity: ZERO,
    };
    setDraggingId(id);
  };

  const onPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag) return;

    const dx = ((event.clientX - drag.startX) / drag.width) * 100;
    const dy = ((event.clientY - drag.startY) / drag.height) * 100;

    const now = performance.now();
    const elapsed = Math.max(now - drag.lastTime, 1);
    const velocity = {
      x: Math.max(-85, Math.min(85, (((event.clientX - drag.lastX) / drag.width) * 100 * 1000) / elapsed)),
      y: Math.max(-85, Math.min(85, (((event.clientY - drag.lastY) / drag.height) * 100 * 1000) / elapsed)),
    };

    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
    drag.lastTime = now;
    drag.velocity = velocity;

    syncOffsets({
      ...offsetsRef.current,
      [drag.id]: {
        x: drag.origin.x + dx,
        y: drag.origin.y + dy,
      },
    });
  };

  const endDrag = (event) => {
    const drag = dragRef.current;
    if (!drag) return;

    if (event?.currentTarget?.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    const current = offsetsRef.current[drag.id] || ZERO;
    dragRef.current = null;
    setDraggingId(null);
    springHome(drag.id, current, drag.velocity);
  };

  return (
    <div
      ref={rootRef}
      className={[
        "blockchain-cube-network",
        isPaused ? "blockchain-cube-network--paused" : "",
        draggingId ? "blockchain-cube-network--dragging" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <svg
        className="blockchain-cube-network__links"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        {EDGES.map(([from, to]) => {
          const a = getPos(from);
          const b = getPos(to);
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              className="blockchain-cube-network__line"
            />
          );
        })}
      </svg>

      {NODES.map((node) => {
        const pos = getPos(node.id);
        const isDragging = draggingId === node.id;

        return (
          <div
            key={node.id}
            className={`blockchain-cube-network__node${isDragging ? " blockchain-cube-network__node--dragging" : ""}`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            onPointerDown={(event) => onPointerDown(event, node.id)}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            role="button"
            tabIndex={0}
            aria-label={`Drag ${node.id} cube`}
          >
            <SolidMiniCube color={node.color} delay={node.delay} />
          </div>
        );
      })}
    </div>
  );
}
