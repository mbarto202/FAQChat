"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FaqChat.co</div>
      <ul className={styles.navLinks}>
        {/* Products Dropdown */}
        <li
          className={styles.productsOption}
          onMouseEnter={toggleProductsDropdown}
          onMouseLeave={toggleProductsDropdown}
        >
          <a className={styles.productsLink} href="#products">Products <FontAwesomeIcon icon={faChevronDown} className={styles.dropdownIcon} /></a>
          {productsDropdownOpen && (
            <ul>
              <li><a href="#product1">Product 1</a></li>
              <li><a href="#product2">Product 2</a></li>
              <li><a href="#product3">Product 3</a></li>
            </ul>
          )}
        </li>

        {/* Services Dropdown */}
        <li
          className={styles.servicesOption}
          onMouseEnter={toggleServicesDropdown}
          onMouseLeave={toggleServicesDropdown}
        >
          <a className={styles.servicesLink} href="#services">Services <FontAwesomeIcon icon={faChevronDown} className={styles.dropdownIcon} /></a>
          {servicesDropdownOpen && (
            <ul>
              <li><a href="#service1">Service 1</a></li>
              <li><a href="#service2">Service 2</a></li>
              <li><a href="#service3">Service 3</a></li>
            </ul>
          )}
        {/*About us*/}
        </li>
        <li className={styles.aboutOption}>
          <a className={styles.aboutLink} href="#about">About Us</a>
        </li>
        <li className={styles.pricingOption}>
            <a className={styles.pricingLink} href="#pricing">Pricing</a>
        </li>
        <li className={styles.contactOption}><a className={styles.contactLink} href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
