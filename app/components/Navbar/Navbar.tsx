"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';
import Image from 'next/image';
import logo from '../../assets/images/logo.png';  


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
      <Image src={logo} alt="Logo" width={150} height={25} className={styles.logo} />  {/* Adjust width and height as needed */}
      <ul className={styles.navLinks}>
        {/* Products Dropdown */}
        <li
          className={styles.productsOption}
          onClick={toggleProductsDropdown}
        >
          <a className={styles.productsLink} href="#products">Products <FontAwesomeIcon icon={faChevronDown} className={styles.dropdownIcon} /></a>
          {productsDropdownOpen && (
            <ul className={styles.dropdownMenuProducts}>
              <li><a href="#product1">Product 1</a></li>
              <li><a href="#product2">Product 2</a></li>
              <li><a href="#product3">Product 3</a></li>
            </ul>
          )}
        </li>

        {/* Services Dropdown */}
        <li
          className={styles.servicesOption}
          onClick={toggleServicesDropdown}
        >
          <a className={styles.servicesLink} href="#services">Services <FontAwesomeIcon icon={faChevronDown} className={styles.dropdownIcon} /></a>
          {servicesDropdownOpen && (
            <ul className={styles.dropdownMenuServices}>
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
