import React from "react";
import Instruction from "./Instruction";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.howItWorksSection}>
      <h2 className={styles.title}>How it works.</h2>
      <div className={styles.content}>
        <Instruction
          number={1}
          title="Upload Your Text"
          description="Provide text of any length and we'll extract questions and answers to create a detailed FAQ page."
        />
        <Instruction
          number={2}
          title="Edit for Accuracy"
          description={`You can then refine these questions and answers, ensuring they serve as the definitive "source of truth" for your AI agent's responses.`}
        />
        <Instruction
          number={3}
          title="Generate a Proactive AI Agent"
          description="We will develop an AI agent that uses decision-tree logic to handle inquiries and even pose questions, enhancing your insight into your audience's needs"
        />
      </div>
    </section>
  );
};

export default HowItWorks;
