import { SQLocal } from 'sqlocal';
import type { MovieData } from './types';

const { sql } = new SQLocal('movie-database.sqlite3');

export async function initDatabase() {
  await sql`
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      user_rating BOOLEAN NOT NULL
    )
  `;
}

export async function addMovie(title: string, user_rating: boolean) {
  await sql`
    INSERT INTO movies (title, user_rating) 
    VALUES (${title}, ${user_rating})
  `;
}

export async function getMovies(): Promise<MovieData[]> {
  const data = await sql`SELECT * FROM movies`;
  return data as MovieData[]; 
}