import type { MovieDetails } from "../types";
import styles from "./MovieModal.module.css";
import { useConfig } from "../context/configContext";
import RatingBar from "./RatingBar";
import ProfileCardItem from "./ProfileImage";
import clockImage from "../assets/clock.png";
import calendarImage from "../assets/calendar.png";
import moneyImage from "../assets/money.png";
import { getFlagEmoji } from "../utils";
import { storeMovie } from "../database";
import ISO6391 from "iso-639-1";

interface MovieModalProps {
  movieDetails: MovieDetails;
}

function MovieModal({ movieDetails }: MovieModalProps) {
  const { getImageUrl } = useConfig();
  const profitString = (
    (movieDetails.revenue - movieDetails.budget) /
    1000000
  ).toFixed(1);

  const profitNumber = Number(profitString);

  const handleDropWrapper = function (rating_type: string) {
    switch (rating_type) {
      case "quality":
        return (value: number) => {
          movieDetails.user_rating_quality = value;
          storeMovie(movieDetails);
        };
      case "entertainment":
        return (value: number) => {
          movieDetails.user_rating_entertainment = value;
          storeMovie(movieDetails);
        };
    }
  };

  const profitClass =
    profitNumber > 0
      ? styles.profit
      : profitNumber < 0
        ? styles.loss
        : styles.zero;

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Left}>
        <h3 className={styles.Heading}>
          {movieDetails.title}
          {movieDetails.title !== movieDetails.originalTitle && (
            <span>{movieDetails.originalTitle}</span>
          )}
        </h3>
        <div className={styles.About}>
          <div className={styles.Details}>
            <p>
              <img src={clockImage} alt="clock" />
              {movieDetails.runtime} minutes
            </p>
            <p>
              <img src={calendarImage} alt="calendar" />
              {movieDetails.releaseDate}
            </p>
          </div>
          <p className={profitClass}>
            ${profitNumber} M <img src={moneyImage} alt="money" />
          </p>
          <p className={styles.Country}>
            {getFlagEmoji(movieDetails.originCountry[0])}
          </p>
          <p className={styles.Language}>
            language: {ISO6391.getName(movieDetails.originalLanguage)}
          </p>
        </div>
        <p> {movieDetails.overview}</p>
        <ul className={styles.genres}>
          {movieDetails.genres.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <ul className={styles.Cast}>
          {movieDetails.cast.map((item) => (
            <ProfileCardItem
              key={`${item.id} ${item.job}`}
              item={item}
              getImageUrl={getImageUrl}
            />
          ))}
        </ul>

        <ul className={styles.Crew}>
          {movieDetails.crew.map((item) => (
            <ProfileCardItem
              key={`${item.id} ${item.job}`}
              item={item}
              getImageUrl={getImageUrl}
            />
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
        <div className={styles.Rating}>
          <RatingBar
            value={movieDetails.user_rating_quality}
            handleDrop={handleDropWrapper("quality")}
          />
          <RatingBar
            value={movieDetails.user_rating_entertainment}
            handleDrop={handleDropWrapper("entertainment")}
          />
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
