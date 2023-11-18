import React from "react";
import Link from "next/link";

const OutlineButton = ({ title, onClick, link, textColor = "black" }) => {
  if (link) {
    return (
      <Link
        href={link}
        style={{
          ...styles.buttonLink,
          color: textColor,
        }}
      >
        {title}
      </Link>
    );
  }

  if (onClick && typeof onClick === "function") {
    return (
      <button style={styles.button} onClick={onClick}>
        {title}
      </button>
    );
  }

  return <button style={styles.button}>{title}</button>;
};

export default OutlineButton;
const styles = {
  button: {
    borderRadius: "8px",
    padding: "8px 16px",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
  buttonLink: {
    display: "inline-block",
    borderRadius: "8px",
    padding: "8px 16px",
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",

    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
  },
};
