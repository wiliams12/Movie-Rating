import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.Attribution}
        href="https://www.flaticon.com/free-icons/movies"
        title="movies icons"
      >
        Movies icons created by Freepik - Flaticon
      </a>
    </footer>
  );
}

export default Footer;
