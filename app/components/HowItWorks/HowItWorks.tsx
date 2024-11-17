import React from "react";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <h2 className={styles.title}>How It Works.</h2>
      <div className={styles.content}>
        <div className={styles.instruction}>
          <div className={styles.innerFrame}>
            <div className={styles.number}>
              <div className={styles.numberBackground}>
                <span className={styles.numberText}>1</span>
              </div>
            </div>
            <div className={styles.instructionTitle}>Upload Your Text</div>
          </div>
          <div className={styles.description}>
            <p className={styles.descriptionText}>
              Provide text of any length and we'll extract questions and answers
              to create a detailed FAQ page.
            </p>
          </div>
        </div>
        <div className={styles.instruction}>Edit for Accuracy</div>
        <div className={styles.instruction}>Generate a Proactive AI Agent</div>
      </div>
    </section>
  );
};

export default HowItWorks;
