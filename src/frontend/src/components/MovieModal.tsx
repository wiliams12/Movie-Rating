import type { MovieDetails } from "../types";
import styles from "./MovieModal.module.css";
import { useConfig } from "../context/configContext";
import RatingBar from "./RatingBar";

interface MovieModalProps {
  movieDetails: MovieDetails;
}

function MovieModal({ movieDetails }: MovieModalProps) {
  const { getImageUrl } = useConfig();
  return (
    <>
      <div className={styles.Left}>
        <h3 className={styles.Heading}>
          {movieDetails.title}
          <span>{movieDetails.originalTitle}</span>{" "}
        </h3>
        <p>{movieDetails.runtime}</p>
        <p>{movieDetails.releaseDate}</p>
        <div>
          <p>{movieDetails.budget}</p>
          <p>{movieDetails.revenue}</p>
        </div>
        <div>
          <p>{movieDetails.originCountry}</p>
          <p>{movieDetails.originalLanguage}</p>
        </div>
        <p>{movieDetails.overview}</p>
        <ul>
          {movieDetails.genres.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <ul>
          {movieDetails.cast.map((item) => (
            <li key={item.id}>
              <h4>
                {item.name} <span>{item.character}</span>
              </h4>
              <img
                src={getImageUrl(item.photo, "normal", "profile")}
                alt={`Profile of ${item.name}`}
                loading="lazy"
                crossOrigin="anonymous"
              />
              <p>{item.job}</p>
            </li>
          ))}
        </ul>
        <ul>
          {movieDetails.crew.map((item) => (
            <li key={item.id}>
              <h4>
                {item.name} <span>{item.character}</span>
              </h4>
              <img
                src={getImageUrl(item.photo, "normal", "profile")}
                alt={`Profile of ${item.name}`}
                loading="lazy"
                crossOrigin="anonymous"
              />
              <p>{item.job}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.Right}>
        <img
          className={styles.Poster}
          src={getImageUrl(movieDetails.poster, "normal", "poster")}
          alt={`${movieDetails.title} poster`}
          crossOrigin="anonymous"
          loading="lazy"
        />
        <div className={styles.Rating}></div>
      </div>
      <RatingBar />
      <RatingBar />
    </>
  );
}

export default MovieModal;
