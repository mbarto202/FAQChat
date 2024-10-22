"use client";

import React from "react";
import Image from "next/image";
import styles from "./TryChatting.module.css";
import logo from "../../assets/images/faqlogo.png";
import assistant from "../../assets/images/assistant.png";

const TryChatting = () => {
  return (
    <section className={styles.tryChattingSection}>
      <div className={styles.contentFrame}>
        {" "}
        {/* Frame encapsulating the title, text, and button */}
        <div className={styles.titleTextFrame}>
          <h2 className={styles.title}>
            Try Chatting with Our{" "}
            <span className={styles.logoText}>
              <Image src={logo} alt="FAQ Logo" width={120} height={50} />
            </span>
          </h2>
          <p className={styles.description}>
            Experience our FAQChat system and see how it works
          </p>
          <button className={styles.chatButton}>Chat Here</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.ellipse}></div>
        <Image
          src={assistant}
          alt="Description of the image"
          width={220}
          height={360}
        />
      </div>
    </section>
  );
};

export default TryChatting;
