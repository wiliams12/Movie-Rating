import type { MovieData } from "../types";
import styles from "./MovieCard.module.css";
import { useConfig } from "../context/configContext";

interface Props {
  movieData: MovieData;
  display: string;
}

function MovieCard({ movieData, display }: Props) {
  const { getImageUrl } = useConfig();
  return (
    <>
      <img
        src={getImageUrl(movieData.image, "normal", "backdrop")}
        alt={`${movieData.title} image`}
        className={styles.backdrop}
        crossOrigin="anonymous"
      />
      <h3 className={styles.movieHeading}>
        <span className={styles.title}>{movieData.title}</span>
        <span className={styles.releaseDate}>{movieData.releaseDate}</span>
        <span className={styles.Display}>{display ?? "#"}</span>
      </h3>
      <p className={styles.overview}>{movieData.overview}</p>
      <div className={styles.breaker}></div>
    </>
  );
}

export default MovieCard;
