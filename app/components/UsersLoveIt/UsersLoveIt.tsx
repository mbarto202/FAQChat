import React from "react";
import styles from "./UsersLoveIt.module.css";

const UsersLoveIt = () => {
  return (
    <section id="users-love-it">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Users love it because:</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.chatFrame1}>
            <div className={styles.cFrameContent1}>
              <div className={styles.textBubble}>text bubble</div>
              <div className={styles.img}>img</div>
            </div>
          </div>
          <div className={styles.chatFrame2}>
            <p>chat2</p>
          </div>
          <div className={styles.chatFrame3}>
            <p>chat3</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersLoveIt;
