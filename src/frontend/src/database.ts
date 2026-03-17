import { openDB, type DBSchema } from 'idb';
import type { MovieDetails, MovieData } from './types';

interface MovieDB extends DBSchema {
  movies: {
    key: string;
    value: MovieDetails;
  };
}

const DB_NAME = 'pwa_movie_database';
const STORE_NAME = 'movies';

export async function initDB() {
  return await openDB<MovieDB>(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    },
  });
}

export async function storeMovie(movie: MovieDetails): Promise<void> {
  try {
    const db = await initDB();
    await db.put(STORE_NAME, movie);
    console.log(`Successfully stored/updated: ${movie.title}`);
  } catch (error) {
    console.error("IndexedDB write failed:", error);
    throw error;
  }
}

export async function getMovie(id: string): Promise<MovieDetails | undefined> {
  const db = await initDB();
  return await db.get(STORE_NAME, id);
}

export async function getAllMovies(): Promise<MovieData[]> {
  const db = await initDB();
  const data = await db.getAll(STORE_NAME);

  console.log(data)
  
  return data.map((movieDetails) => ({
    image: movieDetails.backdrop,
    id: movieDetails.id,
    title: movieDetails.title,
    overview: movieDetails.overview,
    releaseDate: movieDetails.releaseDate,
    user_rating_entertainment: movieDetails.user_rating_entertainment,
    user_rating_quality: movieDetails.user_rating_quality
  }));
}

export async function clearAllMovies(): Promise<void> {
  try {
    const db = await initDB();
    await db.clear(STORE_NAME);
    console.log("All movies cleared from the database.");
  } catch (error) {
    console.error("Failed to clear movies:", error);
    throw error;
  }
}