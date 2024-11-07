import React from "react";
import styles from "./CreateYourOwn.module.css";
import Button from "../Button/Button";

const CreateYourOwn = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleTextFrame}>
        <h2>Create your own FAQChat now</h2>
        <p className={styles.description}>
          Upload text of any length below, and we will convert it into an
          organized FAQ that your audience can chat with.
        </p>
      </div>

      <div className={styles.inputButtonsFrame}>
        <textarea
          className={styles.textArea}
          placeholder="Paste unlimited text here"
        />
        <div className={styles.buttonGroup}>
          <button className={styles.buttonLeft}>
            <span className={styles.buttonLeftText}>Upload</span>
          </button>
          <Button text="Clear" />
        </div>
      </div>
    </section>
  );
};

export default CreateYourOwn;
