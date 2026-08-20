import React from "react";
import { Link } from "@chakra-ui/react";
import navStyles from "@/styles/Navbar.module.css";

const OutlineButton = ({ title, onClick, link, textColor = "white", className = "" }) => {
  const combinedClass = `${navStyles.button} ${className}`.trim();

  if (link) {
    return (
      <Link
        className={`${navStyles.buttonLink} ${className}`.trim()}
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
      <button className={combinedClass} onClick={onClick}>
        {title}
      </button>
    );
  }

  return <button className={combinedClass}>{title}</button>;
};

export default OutlineButton;
