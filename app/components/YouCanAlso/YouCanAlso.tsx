import React from "react";
import styles from "./YouCanAlso.module.css";
import Button from "../Button/Button";
import img from "../../assets/images/image2.png";
import Image from "next/image";

const YouCanAlso = () => {
  return (
    <section id="you-can-also">
      <div className={styles.container}>
        <div className={styles.ellipse} />
        <Image src={img} alt="Description of image" className={styles.image} />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>
            You can also try chatting with ours. It’s fun!
          </h2>
          <Button text="Start Chatting" />
        </div>
      </div>
    </section>
  );
};

export default YouCanAlso;
