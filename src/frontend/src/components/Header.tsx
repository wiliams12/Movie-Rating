import React from "react";
import styles from "./Header.module.css";
import iconMedium from "../assets/icon-medium.png";

interface HeaderProps {
  children?: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>
        <a href="/">
          <img
            src={iconMedium}
            alt="Rate Movies icon:  by Freepik - Flaticon"
          />
          <span>Rate Movies!</span>
        </a>
      </h1>

      {children}
    </header>
  );
}

export default Header;
