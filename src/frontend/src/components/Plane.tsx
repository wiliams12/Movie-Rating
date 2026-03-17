import type { MovieData } from "../types";

interface MovieSelectionProps {
  movies: MovieData[];
}

function Plane({ movies }: MovieSelectionProps) {
  return (
    <div>
      <p>hi</p>
    </div>
  );
}

export default Plane;
