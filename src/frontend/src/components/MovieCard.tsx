import type { MovieData } from "../types";

function MovieCard({ movie }: { movie: MovieData }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.user_rating}</p>
    </div>
  );
}

export default MovieCard;
