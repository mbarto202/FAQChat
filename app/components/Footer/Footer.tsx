import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section id="footer" className={styles.container}>
      <div className={styles.text}>©2024 FAQChat All Rights Reserved.</div>
      <div className={styles.text2}>
        <div className={styles.termsOfService}>Terms of Service</div>
        <div className={styles.divider}></div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
      </div>
    </section>
  );
};

export default Footer;
