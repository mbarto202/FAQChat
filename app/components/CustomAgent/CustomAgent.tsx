import React from "react";
import styles from "./CustomAgent.module.css";

const CustomAgent = () => {
  return (
    <section id="custom-agent">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2 className={styles.titleText}>Want a custom agent?</h2>
          <p className={styles.smallerText}>
            Leave your email here and we’ll contact you.
          </p>
        </div>
        <div className={styles.emailForm}>
          <form className={styles.form}>
            <input
              className={styles.placeholder}
              type="email"
              placeholder="Enter your email"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomAgent;
