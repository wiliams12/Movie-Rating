import { useState, useEffect, useMemo } from "react";
import { initDB, getAllMovies } from "./database";
import MovieSection from "./components/MovieSection";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";
import type { MovieData } from "./types";
import SearchBar from "./components/SearchBar";
import Cross from "./assets/cross.png";
import styles from "./App.module.css";
import Utils from "./components/Utils";
import Plane from "./components/Plane";

const ViewMap: Record<string, React.ElementType> = {
  graph: Plane,
  default: MovieSection,
  list: MovieSection,
};

export function useViewManager(
  rawMovies: MovieData[],
  initialView: string = "default",
) {
  const [dataState, setDataState] = useState<string>(initialView);

  const [sortState, setSortState] = useState<string>("default");

  const displayedMovies = useMemo(() => {
    const movieClone = [...rawMovies];

    if (sortState === "rating") {
      return movieClone.sort(
        (a, b) => b.user_rating_quality - a.user_rating_quality,
      );
    }

    if (sortState === "alphabetical") {
      return movieClone.sort((a, b) => a.title.localeCompare(b.title));
    }
    return movieClone;
  }, [rawMovies, sortState]);

  const ActiveView = ViewMap[dataState] || ViewMap.default;

  return {
    dataState,
    setDataState,
    sortState,
    setSortState,
    ActiveView,
    displayedMovies,
  };
}

function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [isAsidePopupOpen, setIsAsidePopupOpen] = useState(true);
  const [isSearch, setIsSearch] = useState(false);
  const { dataState, setDataState, ActiveView } = useViewManager(
    movies,
    "default",
  );

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
      setIsSearch(true);
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
        <div className={styles.Content}>
          <div className={styles.Utilities}>
            <Utils changeState={setDataState} isSearch={isSearch} />
          </div>
          <ActiveView movies={movies} layout={dataState} />
        </div>

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
