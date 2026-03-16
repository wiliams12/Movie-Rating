import styles from "./Aside.module.css";
function Aside() {
  return (
    <aside className={styles.aside}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. A esse
        assumenda molestiae deleniti ex, explicabo voluptatibus officia corporis
        consectetur eum, reiciendis ducimus, provident ut. Sit nulla facilis
        beatae amet porro!
      </p>
    </aside>
  );
}

export default Aside;
