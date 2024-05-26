import React from "react";
import "./Button.css";

const Button = ({ text, shopBtn, styles }) => {
  return (
    <button style={styles} className="black-button">
      {text}
    </button>
  );
};

export default Button;
