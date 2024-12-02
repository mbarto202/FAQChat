import React from "react";
import styles from "./UsersLoveIt.module.css";
import Image from "next/image";
import img1 from "../../assets/images/image6.png";
import img2 from "../../assets/images/image3.png";
import img3 from "../../assets/images/image7.png";

const UsersLoveIt = () => {
  const chatFrames = [
    {
      frameClass: styles.chatFrame1,
      contentClass: styles.cFrameContent1,
      textBubbleClass: styles.textBubble,
      textContentClass: styles.textContent1,
      arrowClass: styles.arrow1,
      text: "Who likes reading really long FAQs?",
      imageWrapperClass: styles.imageWrapper,
      imgClass: styles.image,
      imgSrc: img1,
      imgAlt: "User Feedback 1",
    },
    {
      frameClass: styles.chatFrame2,
      contentClass: styles.cFrameContent2,
      textBubbleClass: styles.textBubble2,
      textContentClass: styles.textContent2,
      arrowClass: styles.arrow2,
      text: `They can ask very complex questions, and the AI can extrapolate
             between all of the answers within the FAQ to answer.`,
      imageWrapperClass: styles.imageWrapper2,
      imgClass: styles.image2,
      imgSrc: img2,
      imgAlt: "User Feedback 2",
    },
    {
      frameClass: styles.chatFrame3,
      contentClass: styles.cFrameContent3,
      textBubbleClass: styles.textBubble3,
      textContentClass: styles.funText,
      arrowClass: styles.arrow3,
      text: "It’s fun!",
      imageWrapperClass: styles.imageWrapper3,
      imgClass: styles.image3, // Use the image3-specific class
      imgSrc: img3,
      imgAlt: "User Feedback 3",
    },
  ];

  return (
    <section id="users-love-it">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h2>Users love it because:</h2>
        </div>
        <div className={styles.content}>
          {chatFrames.map((frame, index) => (
            <div key={index} className={frame.frameClass}>
              <div className={frame.contentClass}>
                <div className={frame.imageWrapperClass}>
                  <div className={styles.ellipse7}></div>
                  <div className={frame.imgClass}>
                    <Image src={frame.imgSrc} alt={frame.imgAlt} />
                  </div>
                </div>
                <div className={frame.textBubbleClass}>
                  <div className={frame.textContentClass}>{frame.text}</div>
                  <div className={frame.arrowClass}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersLoveIt;
