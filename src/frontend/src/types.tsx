export interface MovieData {
  image: string;
  id: string;
  title: string;
  overview: string;
  releaseDate: string;
  user_rating: number;
}

export interface Person {
  id: string;
  gender: string;
  name: string;
  job: string;
  character: string; // null if the person didn't act in the film
  photo: string;
}

export interface MovieDetails {
  title: string;
  originalTitle: string;
  id: string;
  poster: string;
  originCountry: string;
  originalLanguage: string;
  overview: string;
  budget: number;
  revenue: number;
  runtime: number;
  voteAverage: number;
  genres: string[];
  releaseDate: string;
  cast: Person[];
  crew: Person[];
}
