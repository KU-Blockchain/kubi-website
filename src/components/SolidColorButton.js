import React from "react";
import { Link } from "@chakra-ui/react";
import navStyles from "@/styles/Navbar.module.css";
const OutlineButton = ({ title, onClick, link, textColor = "white" }) => {
  if (link) {
    return (
      <Link
        className={navStyles.buttonLink}
        href={link}
        style={{
          color: textColor,
        }}
        
      >
        {title}
      </Link>
    );
  }

  if (onClick && typeof onClick === "function") {
    return (
      <button className={navStyles.button} onClick={onClick}>
        {title}
      </button>
    );
  }

  return <button className={navStyles.button}>{title}</button>;
};

export default OutlineButton;
const styles = {
  button: {
    borderRadius: "8px",
    padding: "8px 16px",
    backgroundColor: "#0051ba",
    color: "red",
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
    color: "white",
    cursor: "pointer",
    textDecoration: "none",

    "&:hover": {
      color: "white",
    },
  },
};
