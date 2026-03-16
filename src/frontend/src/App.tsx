import { useState, useEffect } from "react";
import { initDB, getAllMovies } from "./database";
import MovieSection from "./components/MovieSection";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import type { MovieData } from "./types";
import SearchBar from "./components/SearchBar";
import Cross from "./assets/cross.png";
import styles from "./App.module.css";

function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isAsidePopupOpen, setIsAsidePopupOpen] = useState(true);

  useEffect(() => {
    async function setup() {
      await initDB();
      const savedMovies = await getAllMovies();
      console.log(savedMovies);
      setMovies(savedMovies);
      setIsReady(true);
    }
    setup();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsAsidePopupOpen(false);
      }
    };

    if (isAsidePopupOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleSearchMovie = async (query: string) => {
    try {
      const response = await fetch("/search?query=" + query);

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error("Failed to search for movie:", error);
    }
  };

  if (!isReady) return <div>Loading Database...</div>;

  return (
    <>
      <Header>
        <SearchBar
          onSearch={(query) => {
            handleSearchMovie(query);
          }}
        />
      </Header>
      <main className={styles.main}>
        <MovieSection movies={movies} />
        <div className={styles.btnWrapper}>
          <button
            className={styles.openAside}
            onClick={() => setIsAsidePopupOpen(true)}
          >
            How to use?
          </button>
        </div>
        <section className={styles.PopUpWrapper}>
          <div
            className={`${styles.asideOverlay} ${isAsidePopupOpen ? styles.open : ""}`}
            onClick={() => setIsAsidePopupOpen(false)}
          ></div>

          <div
            className={`${styles.asideWrapper} ${isAsidePopupOpen ? styles.open : ""}`}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setIsAsidePopupOpen(false)}
            >
              <img src={Cross} alt="cross icon" />
            </button>
            <Aside />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
