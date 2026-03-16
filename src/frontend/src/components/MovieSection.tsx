import { useState, useEffect } from "react";
import type { MovieData } from "../types";
import MovieCard from "./MovieCard";
import styles from "./MovieSelection.module.css";
import MovieModal from "./MovieModal";
import Cross from "../assets/cross.png";
import type { MovieDetails } from "../types";
import { getMovie } from "../database";

interface MovieSelectionProps {
  movies: MovieData[];
}

function MovieSelection({ movies }: MovieSelectionProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);

  const getMovieDetails = async (id: string) => {
    const movieFromDB = await getMovie(id);
    if (movieFromDB !== undefined) {
      setIsModalOpen(true);
      setMovieDetails(movieFromDB);
    } else {
      try {
        const response = await fetch(`/get-details?id=${id}`);

        if (!response.ok) {
          throw new Error(`Server Error: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setIsModalOpen(true);
        setMovieDetails(data);
      } catch (error) {
        console.error("Failed to retrive movie details.:", error);
      }
    }
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <ul className={styles.movieGrid}>
        {movies.map((item) => (
          <li
            className={styles.movieCard}
            key={item.id}
            onClick={() => getMovieDetails(item.id)}
            role="button"
          >
            <MovieCard movie={item} />
          </li>
        ))}
      </ul>

      {isModalOpen && movieDetails !== null && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeBtn} onClick={closeModal}>
              <img src={Cross} alt="cross icon" />
            </button>
            <MovieModal movieDetails={movieDetails} />
          </div>
        </div>
      )}
    </>
  );
}

export default MovieSelection;
