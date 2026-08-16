"use client";

import styles from "./CubeLoader.module.css";

const CELL_COLORS = [
  "#9A7B2F",
  "#6E2A32",
  "#5C738C",
  "#16325C",
  "#2E3D52",
  "#9A7B2F",
  "#0E1C38",
  "#5C738C",
  "#6E2A32",
];

const DELAYS = ["", styles.d1, styles.d2, styles.d1, styles.d2, styles.d3, styles.d2, styles.d3, styles.d4];

const SIZES = {
  sm: "8px",
  md: "22px",
  lg: "52px",
};

export default function CubeLoader({ size = "md" }) {
  return (
    <div
      className={styles.loader}
      style={{ "--cell-size": SIZES[size] || SIZES.md }}
      role="status"
      aria-label="Loading"
    >
      {CELL_COLORS.map((color, index) => (
        <div
          key={index}
          className={`${styles.cell} ${DELAYS[index] || ""}`}
          style={{ "--cell-color": color }}
        />
      ))}
    </div>
  );
}
