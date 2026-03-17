import { useState, useMemo } from "react";
import type { MovieData } from "../types";
import styles from "./Plane.module.css";

interface MovieSelectionProps {
  movies: MovieData[];
}

function Plane({ movies }: MovieSelectionProps) {
  const [hoveredMovie, setHoveredMovie] = useState<string | null>(null);

  const groupedMovies = useMemo(() => {
    const groups: Record<string, MovieData[]> = {};

    movies.forEach((movie) => {
      const x = movie.user_rating_quality ?? 0;
      const y = movie.user_rating_entertainment ?? 0;
      const key = `${x},${y}`;

      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(movie);
    });

    return Object.values(groups);
  }, [movies]);

  return (
    <div className={styles.Graph}>
      <div className={styles.infoBar}>
        {hoveredMovie ? hoveredMovie : "Hover over a dot to see the title"}
      </div>

      {/* 1. EXPANDED VIEWBOX: -15 on X (left padding), 115 on Height (bottom padding) */}
      <svg viewBox="-15 -5 130 120" className={styles.svgGraph}>
        {/* Axes Lines */}
        <line x1="0" y1="0" x2="0" y2="100" stroke="gray" strokeWidth="0.5" />
        <line
          x1="0"
          y1="100"
          x2="100"
          y2="100"
          stroke="gray"
          strokeWidth="0.5"
        />

        {/* 2. NUMERIC MARKERS */}
        {/* Y-Axis (Entertainment) */}
        <text
          x="-2"
          y="100"
          fontSize="4"
          textAnchor="end"
          alignmentBaseline="middle"
        >
          0
        </text>
        <text
          x="-2"
          y="50"
          fontSize="4"
          textAnchor="end"
          alignmentBaseline="middle"
        >
          50
        </text>
        <text
          x="-2"
          y="0"
          fontSize="4"
          textAnchor="end"
          alignmentBaseline="middle"
        >
          100
        </text>

        {/* X-Axis (Quality) */}
        <text x="0" y="104" fontSize="4" textAnchor="middle">
          0
        </text>
        <text x="50" y="104" fontSize="4" textAnchor="middle">
          50
        </text>
        <text x="100" y="104" fontSize="4" textAnchor="middle">
          100
        </text>

        {/* 3. AXIS TITLES */}
        <text x="50" y="110" fontSize="5" textAnchor="middle" fontWeight="bold">
          Quality
        </text>

        {/* Y-Axis Title requires a mathematical rotation to read vertically */}
        <text
          x="-10"
          y="50"
          fontSize="5"
          textAnchor="middle"
          fontWeight="bold"
          transform="rotate(-90, -10, 50)"
        >
          Entertainment
        </text>

        {groupedMovies.map((group, index) => {
          const firstMovie = group[0];
          const isMultiple = group.length > 1;
          const combinedTitles = group.map((m) => m.title).join(" • ");

          return (
            <circle
              key={index}
              cx={firstMovie.user_rating_quality ?? 0}
              cy={100 - (firstMovie.user_rating_entertainment ?? 0)}
              r={isMultiple ? "2" : "1"}
              className={styles.dot}
              onMouseEnter={() => setHoveredMovie(combinedTitles)}
              onMouseLeave={() => setHoveredMovie(null)}
            />
          );
        })}
      </svg>
    </div>
  );
}

export default Plane;
