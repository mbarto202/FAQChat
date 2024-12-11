import React from "react";
import styles from "./YouCanAlso.module.css";
import Button from "../Button/Button";

const YouCanAlso = () => {
  return (
    <section id="you-can-also">
      <div className={styles.container}>
        <img
          src="/path-to-your-image.jpg"
          alt="Description of image"
          className={styles.image}
        />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            You can also try chatting with ours. It’s fun!
          </h2>
          <Button text="Generate AI Agent" />
        </div>
      </div>
    </section>
  );
};

export default YouCanAlso;
