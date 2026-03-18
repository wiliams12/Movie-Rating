export interface MovieData {
  image: string;
  id: string;
  title: string;
  overview: string;
  releaseDate: string;
  user_rating_quality: number;
  user_rating_entertainment: number;
  voteAverage: number;
}

export interface Person {
  id: string;
  gender: string;
  name: string;
  job: string;
  character: string;
  photo: string;
}

export interface MovieDetails {
  title: string;
  originalTitle: string;
  id: string;
  poster: string;
  backdrop: string;
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
  user_rating_quality: number;
  user_rating_entertainment: number;
}
