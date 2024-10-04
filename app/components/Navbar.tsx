import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FaqChat.co</div>
      <ul className={styles.navLinks}>
        <li className={styles.productsOption}><a href="#products">Products</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
