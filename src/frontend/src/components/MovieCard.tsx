import type { MovieData } from "../types";
import styles from "./MovieCard.module.css";
import { useConfig } from "../context/configContext";

function MovieCard({ movie }: { movie: MovieData }) {
  const { getImageUrl } = useConfig();
  return (
    <>
      <img
        src={getImageUrl(movie.image, "normal", "backdrop")}
        alt={`${movie.title} image`}
        className={styles.backdrop}
        crossOrigin="anonymous"
      />
      <h3 className={styles.movieHeading}>
        <span className={styles.title}>{movie.title}</span>
        <span className={styles.releaseDate}>{movie.releaseDate}</span>
      </h3>
      <p className={styles.overview}>{movie.overview}</p>
      <div className={styles.breaker}></div>
    </>
  );
}

export default MovieCard;
