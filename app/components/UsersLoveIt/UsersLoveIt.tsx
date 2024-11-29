import React from "react";
import styles from "./UsersLoveIt.module.css";
import Image from "next/image";
import img1 from "../../assets/images/image6.png";
import img2 from "../../assets/images/image3.png";
import img3 from "../../assets/images/image7.png";

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
              <div className={styles.imageWrapper}>
                <div className={styles.ellipse7}></div>
                <div className={styles.image}>
                  <Image src={img1} alt="Description" />
                </div>
              </div>
              <div className={styles.textBubble}>
                <div className={styles.textContent1}>
                  Who likes reading really long FAQs?
                </div>
                <div className={styles.arrow1}></div>
              </div>
            </div>
          </div>
          <div className={styles.chatFrame2}>
            <div className={styles.cFrameContent2}>
              <div className={styles.imageWrapper2}>
                <div className={styles.ellipse7}></div>
                <div className={styles.image2}>
                  <Image src={img2} alt="Description" />
                </div>
              </div>
              <div className={styles.textBubble2}>
                <div className={styles.textContent2}>
                  They can ask very complex questions, and the AI can
                  extrapolate between all of the answers within the FAQ to
                  answer.
                </div>
                <div className={styles.arrow2}></div>
              </div>
            </div>
          </div>
          <div className={styles.chatFrame3}>
            <div className={styles.cFrameContent3}>
              <div className={styles.imageWrapper3}>
                <div className={styles.ellipse7}></div>
                <div className={styles.image3}>
                  <Image src={img3} alt="Description" />
                </div>
              </div>
              <div className={styles.textBubble3}>
                <div className={styles.funText}>It’s fun!</div>
                <div className={styles.arrow3}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsersLoveIt;
