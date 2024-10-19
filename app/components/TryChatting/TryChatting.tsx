"use client";

import React from 'react';
import Image from 'next/image';
import styles from './TryChatting.module.css'; // Import the CSS file

const TryChatting = () => {
  return (
    <section className={styles.tryChattingSection}>
      <div className={styles.contentFrame}> {/* Frame encapsulating the title, text, and button */}
        <h2 className={styles.title}>Try Chatting with Our FAQ</h2>
        <p className={styles.description}>Experience our FAQChat system and see how it works</p>
        <button className={styles.chatButton}>Chat Here</button>
      </div>
      <div className={styles.imageContainer}>
        png
      </div>
    </section>
  );
};

export default TryChatting;
