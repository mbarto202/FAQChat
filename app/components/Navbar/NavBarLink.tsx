"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBarLink.module.css';

interface NavBarLinkProps {
  title: string;
  href: string;
  links?: { name: string, href: string }[];  // Optional dropdown links
}

const NavBarLink: React.FC<NavBarLinkProps> = ({ title, href, links }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <li className={styles.navItem} onClick={links ? toggleDropdown : undefined}>
      <a className={styles.navLink} href={href}>
        {title}
        {links && <FontAwesomeIcon icon={faChevronDown} className={styles.dropdownIcon} />}
      </a>
      {dropdownOpen && links && (
        <ul className={styles.dropdownMenu}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavBarLink;
