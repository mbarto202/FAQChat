"use client";

import React from 'react';
import Image from 'next/image';
import styles from './TryChatting.module.css'; 

const TryChatting = () => {
  return (
    <section className={styles.tryChattingContainer}>
      {/* Left section (title, text, button) */}
      <div className={styles.leftSection}>
        <h2 className={styles.title}>Try Chatting with Our FAQ</h2>
        <p className={styles.description}>
          Experience our FAQChat system and see how it works
        </p>
        <button className={styles.chatButton}>Chat Here</button>
      </div>

      {/* Right section (PNG image) */}
      <div className={styles.rightSection}>
        png
      </div>
    </section>
  );
};

export default TryChatting;
