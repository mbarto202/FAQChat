"use client";

import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import NavBarLink from "./NavBarLink"; // Import the reusable component
import logo from "../../assets/images/logo.png";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Image
        src={logo}
        alt="Logo"
        width={150}
        height={25}
        className={styles.logo}
      />
      <ul className={styles.navLinks}>
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
