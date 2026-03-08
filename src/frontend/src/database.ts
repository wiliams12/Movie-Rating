import { SQLocal } from 'sqlocal';
import type { MovieData } from './types';

// 1. Initialize the instance
const { sql, destroy } = new SQLocal('movie-database.sqlite3');

export async function initDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      user_rating BOOLEAN NOT NULL
    )
  `;
}


export async function clearMoviesTable() {
  await sql`DELETE FROM movies`;
  // Reset the autoincrement counter so IDs start at 1 again
  await sql`DELETE FROM sqlite_sequence WHERE name='movies'`;
}

export async function addMovie(title: string, user_rating: number) {
  await sql`
    INSERT INTO movies (title, user_rating) 
    VALUES (${title}, ${user_rating})
  `;
}

export async function getMovies(): Promise<MovieData[]> {
  const data = await sql`SELECT * FROM movies`;
  return data as MovieData[]; 
}

(window as any).nukeMyDatabase = clearMoviesTable;