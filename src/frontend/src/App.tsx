import { useState, useEffect } from "react";
import { initDatabase, getMovies, addMovie } from "./database";
import MovieSection from "./components/MovieSection";
import type { MovieData } from "./types";

function App() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const [isReady, setIsReady] = useState(false);

  // useEffect runs once when the component first loads
  useEffect(() => {
    async function setup() {
      await initDatabase(); // Build the table
      const savedMovies = await getMovies(); // Grab saved data from OPFS
      setMovies(savedMovies); // Put it in React's memory
      setIsReady(true); // Hide the loading screen
    }
    setup();
  }, []); // The empty array [] means "only run this once"

  const handleAddDemoMovie = async () => {
    await addMovie("The Matrix", true);
    // Refresh the list after adding
    const updatedMovies = await getMovies();
    setMovies(updatedMovies);
  };

  if (!isReady) return <div className="p-4">Loading Database...</div>;

  return (
    <div className="container mt-4">
      <h1>Rate Movies!</h1>
      <button className="btn btn-primary mb-3" onClick={handleAddDemoMovie}>
        Add Demo Movie
      </button>

      <MovieSection movies={movies} />
    </div>
  );
}

export default App;
