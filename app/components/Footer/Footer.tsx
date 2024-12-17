import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer id="footer" className={styles.container}>
    <span className={styles.text}>©2024 FAQChat All Rights Reserved.</span>
    <div className={styles.text2}>
      <span className={styles.termsOfService}>Terms of Service</span>
      <span className={styles.divider}></span>
      <span className={styles.privacyPolicy}>Privacy Policy</span>
    </div>
  </footer>
);

export default Footer;
