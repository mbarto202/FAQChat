import React from "react";
import styles from "./HowItWorks.module.css";

interface InstructionProps {
  number: number;
  title: string;
  description: string;
}

const Instruction: React.FC<InstructionProps> = ({
  number,
  title,
  description,
}) => (
  <div className={styles.instruction}>
    <div className={styles.innerFrame}>
      <div className={styles.numberBackground}>
        <span className={styles.numberText}>{number}</span>
      </div>
      <div className={styles.instructionTitle}>{title}</div>
    </div>
    <p className={styles.descriptionText}>{description}</p>
  </div>
);

export default Instruction;
