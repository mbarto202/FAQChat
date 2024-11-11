"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import NavBarLink from "./NavBarLink"; // Import the reusable component
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <nav className={styles.navbar}>
      <Image
        src={logo}
        alt="Logo"
        width={150}
        height={25}
        className={styles.logo}
      />

      <div className={styles.hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />{" "}
        {/* Switch icons */}
      </div>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <NavBarLink
          title="Products"
          href="#products"
          links={[
            { name: "Product 1", href: "#product1" },
            { name: "Product 2", href: "#product2" },
            { name: "Product 3", href: "#product3" },
          ]}
        />
        <NavBarLink
          title="Services"
          href="#services"
          links={[
            { name: "Service 1", href: "#service1" },
            { name: "Service 2", href: "#service2" },
            { name: "Service 3", href: "#service3" },
          ]}
        />
        <NavBarLink title="About Us" href="#about" />
        <NavBarLink title="Pricing" href="#pricing" />
        <NavBarLink title="Contact" href="#contact" />
      </ul>
    </nav>
  );
}
