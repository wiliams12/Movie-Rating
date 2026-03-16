import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a className={styles.Item} href="mailto:vilem.ucik@gmail.com">
        vilem.ucik@gmail.com
      </a>
      <p className={styles.Item}>
        &copy; 2026 Vilém Učík. All rights reserved.
      </p>
      <a
        className={`${styles.Item} ${styles.Attribution}`}
        href="https://www.flaticon.com/free-icons/movies"
        title="movies icons"
      >
        Movies icons created by Freepik - Flaticon
      </a>
    </footer>
  );
}

export default Footer;
