import type { MovieData } from "../types";
import MovieCard from "./MovieCard";
import styles from "./MovieSelection.module.css";

interface MovieSelectionProps {
  movies: MovieData[];
}

function MovieSelection({ movies }: MovieSelectionProps) {
  return (
    <>
      <ul className={styles.movieGrid}>
        {movies.map((item) => (
          <li className={styles.movieCard} key={item.id}>
            <MovieCard movie={item} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default MovieSelection;
