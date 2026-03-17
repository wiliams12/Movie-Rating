import styles from "./Utils.module.css";

interface Props {
  changeState: (value: string) => void;
  isSearch: boolean;
}

function Utils({ changeState, isSearch }: Props) {
  return (
    <ul className={styles.Bar}>
      <li className={styles.Item}>
        <button onClick={() => changeState("default")}>default</button>
      </li>
      <li className={styles.Item}>
        <button onClick={() => changeState("list")}>list</button>
      </li>
      {!isSearch ? (
        <li className={styles.Item}>
          <button onClick={() => changeState("graph")}>graph</button>
        </li>
      ) : (
        ""
      )}

      <li className={styles.Item}></li>
    </ul>
  );
}

export default Utils;
