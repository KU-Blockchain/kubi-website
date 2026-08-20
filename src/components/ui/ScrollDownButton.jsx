"use client";

import styles from "./ScrollDownButton.module.css";

const Arrow = () => (
  <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z" />
  </svg>
);

export default function ScrollDownButton({ href = "#past-events" }) {
  const scroll = () => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles["scroll-down-wrap"]}>
      <button className={styles.button} type="button" aria-label="Scroll to past events" onClick={scroll}>
        <div className={styles["button-box"]}>
          <span className={styles["button-elem"]}>
            <Arrow />
          </span>
          <span className={styles["button-elem"]}>
            <Arrow />
          </span>
        </div>
      </button>
    </div>
  );
}
