import styles from "./MovieListItem.module.css";
import type { MovieData } from "../types";

interface Props {
  movieData: MovieData;
  display: string;
}

function MovieListItem({ movieData, display }: Props) {
  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.movieHeading}>
        <span className={styles.title}>{movieData.title}</span>
        <span className={styles.releaseDate}>{movieData.releaseDate}</span>
      </h3>
      <p className={styles.Display}>{display}</p>
    </div>
  );
}

export default MovieListItem;
