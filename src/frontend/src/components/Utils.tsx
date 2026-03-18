import styles from "./Utils.module.css";

interface Props {
  changeState: (value: string) => void;
  changeSort: (value: string) => void;
  changeReverse: (value: boolean) => void;
  isSearch: boolean;
  isReverted: boolean;
}

function Utils({
  changeState,
  changeSort,
  changeReverse,
  isReverted,
  isSearch,
}: Props) {
  return (
    <div className={styles.Bar}>
      <ul className={styles.List}>
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
      </ul>
      <div className={styles.Vbreak}></div>
      <ul className={`${styles.List} ${styles.Scroll}`}>
        <li className={styles.Item}>
          <button onClick={() => changeReverse(!isReverted)}>invert</button>
        </li>
        {!isSearch ? (
          <li className={styles.Item}>
            <button onClick={() => changeSort("quality")}>quality</button>
          </li>
        ) : (
          ""
        )}
        {!isSearch ? (
          <li className={styles.Item}>
            <button onClick={() => changeSort("entertainment")}>
              entertainment
            </button>
          </li>
        ) : (
          ""
        )}
        {!isSearch ? (
          <li className={styles.Item}>
            <button onClick={() => changeSort("combined")}>combined</button>
          </li>
        ) : (
          ""
        )}
        {!isSearch ? (
          <li className={styles.Item}>
            <button onClick={() => changeSort("diff")}>difference</button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default Utils;
