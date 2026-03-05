import { useState, useEffect } from "react";
import { initDatabase, getMovies, addMovie } from "./database";
import MovieSection from "./components/MovieSection";
import type { MovieData } from "./types";

function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function setup() {
      await initDatabase(); // Build the table
      const savedMovies = await getMovies(); // Grab saved data from OPFS
      setMovies(savedMovies); // Put it in React's memory
      setIsReady(true); // Hide the loading screen
    }
    setup();
  }, []);

  const handleSearchMovie = async (query: string) => {
    try {
      const response = await fetch("/search?query=" + query);

      // TODO: Make responsive to user query
      // comb the data and select good ones

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();

      // TODO: display
      console.log("Search Results:", data.results);
    } catch (error) {
      console.error("Failed to search for movie:", error);
    }
  };

  const getMovieDetails = async (id: string) => {
    try {
      const response = await fetch("/search?query=" + id);

      // TODO: Make responsive to user query
      // comb the data and select good ones

      if (!response.ok) {
        throw new Error(`Server Error: ${response.status}`);
      }

      const data = await response.json();

      console.log("Search Results:", data.results);
    } catch (error) {
      console.error("Failed to retrive movie details.:", error);
    }
  };

  if (!isReady) return <div className="p-4">Loading Database...</div>;

  return (
    <div className="container mt-4">
      <h1>Rate Movies!</h1>
      <button
        className="btn btn-primary mb-3"
        onClick={() => handleSearchMovie("Harry Potter")}
      >
        Add Demo Movie
      </button>

      <MovieSection movies={movies} />
    </div>
  );
}

export default App;
