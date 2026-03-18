import styles from "./RatingBar.module.css";
import { useState, useEffect } from "react";

interface Props {
  value: number | null;
  handleDrop: (value: number) => void;
}

function RatingBar({ value, handleDrop }: Props) {
  const [currentValue, setCurrentValue] = useState<number>(0);

  useEffect(() => {
    setCurrentValue(value ?? 0);
  }, [value]);

  const handleDrag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(Number(e.target.value));
  };

  const containerClass =
    value === null ? `${styles.RatingBar} ${styles.noValue}` : styles.RatingBar;

  return (
    <div className={containerClass}>
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
        value={currentValue}
        onChange={handleDrag}
        onPointerUp={(e) => {
          handleDrop(Number(e.currentTarget.value));
        }}
      />
    </div>
  );
}

export default RatingBar;
