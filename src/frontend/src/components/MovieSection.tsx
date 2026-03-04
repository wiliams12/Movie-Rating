import type { MovieData } from "../types";
import MovieCard from "./MovieCard";

interface MovieSelectionProps {
  movies: MovieData[];
}

function MovieSelection({ movies }: MovieSelectionProps) {
  return (
    <div className="col-md-8">
      <ul className="list-group">
        {movies.map((item) => (
          <li key={item.id} className="list-group-item">
            <MovieCard movie={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSelection;
