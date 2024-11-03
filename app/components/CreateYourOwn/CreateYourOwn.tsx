import React from "react";
import styles from "./CreateYourOwn.module.css";

const CreateYourOwn = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleTextFrame}>
        <h2>Create your own FAQChat now.</h2>
        <p>
          Upload text of any length below, and we will convert it into an
          organized FAQ that your audience can chat with.
        </p>
      </div>
    </section>
  );
};

export default CreateYourOwn;
