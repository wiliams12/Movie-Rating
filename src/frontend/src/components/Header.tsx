import React from "react";
import styles from "./Header.module.css";

interface HeaderProps {
  children?: React.ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Rate Movies!</h1>

      {children}

      <ul className={styles.list}>
        <li className={styles.listItem}>Cras justo odio</li>
        <li className={styles.listItem}>Dapibus ac facilisis in</li>
      </ul>
    </header>
  );
}

export default Header;
