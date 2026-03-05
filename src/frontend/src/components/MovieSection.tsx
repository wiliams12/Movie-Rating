import type { MovieData } from "../types";
import MovieCard from "./MovieCard";

interface MovieSelectionProps {
  movies: MovieData[];
}

function MovieSelection({ movies }: MovieSelectionProps) {
  return (
    <div>
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <MovieCard movie={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSelection;
