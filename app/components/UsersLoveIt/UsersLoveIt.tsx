import React from "react";
import styles from "./UsersLoveIt.module.css";

const UsersLoveIt = () => {
  return (
    <section id="users-love-it">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Users love it because:</h2>
        </div>
        <div className={styles.contentContainer}>
          <p>Content div</p>
        </div>
      </div>
    </section>
  );
};

export default UsersLoveIt;
