import styles from "./MovieListItem.module.css";
import type { MovieData } from "../types";

function MovieListItem({ movie }: { movie: MovieData }) {
  return (
    <div className={styles.Wrapper}>
      <h3 className={styles.movieHeading}>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.releaseDate}>{movie.releaseDate}</span>
      </h3>
    </div>
  );
}

export default MovieListItem;
