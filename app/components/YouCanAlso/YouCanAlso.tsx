import React from "react";
import styles from "./YouCanAlso.module.css";
import Button from "../Button/Button";
import Image from "next/image";
import img from "../../assets/images/image2.png";

const YouCanAlso = () => (
  <section id="you-can-also" className={styles.container}>
    <div className={styles.ellipse} />
    <Image src={img} alt="Chatter" className={styles.image} />
    <div className={styles.textContainer}>
      <h2 className={styles.title}>
        You can also try chatting with ours. It’s fun!
      </h2>
      <Button text="Start Chatting" />
    </div>
  </section>
);

export default YouCanAlso;
