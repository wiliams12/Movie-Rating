import styles from "./RatingBar.module.css";

function RatingBar() {
  return (
    <div className={styles.RatingBar}>
      <ul className={styles.labels}>
        {[...Array(11)].map((_, index) => (
          <li key={index}>{index}</li>
        ))}
      </ul>
      <input
        className={styles.Slider}
        type="range"
        min="0"
        max="100"
        step="1"
      />
    </div>
  );
}

export default RatingBar;
