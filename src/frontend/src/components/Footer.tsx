import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.Item} ${styles.Container}`}>
        <a href="mailto:vilem.ucik@gmail.com">vilem.ucik@gmail.com</a>
        <a href="https://github.com/wiliams12" target="_blank">
          GitHub
        </a>
      </div>
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
