import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ text, style, onClick }) => {
  return (
    <button className={styles.button} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
