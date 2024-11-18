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
}) => {
  return (
    <div className={styles.instruction}>
      <div className={styles.innerFrame}>
        <div className={styles.number}>
          <div className={styles.numberBackground}>
            <span className={styles.numberText}>{number}</span>
          </div>
        </div>
        <div className={styles.instructionTitle}>{title}</div>
      </div>
      <div className={styles.description}>
        <p className={styles.descriptionText}>{description}</p>
      </div>
    </div>
  );
};

export default Instruction;
