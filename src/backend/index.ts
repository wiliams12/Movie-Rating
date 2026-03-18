import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { discoverMovies, GetMovieDetails, getImageConfiguration } from "./helpers.ts";
import { release } from "node:os";

const app = express();

const API = process.env.TMDB_API_KEY as string;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());

app.get("/status", (req: Request, res: Response) => {
  console.log("working port");
  res.json({ message: "Backend is running!" });
});

app.get("/search", async (req: Request, res: Response) => {
  try {
    const keyword = req.query.query as string;
    const movies = await discoverMovies(API, keyword); 
    const formattedResults = movies.map((movie: any) => ({
      image: movie.backdrop_path,
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      releaseDate: movie.release_date,
      user_rating_quality: null,
      user_rating_entertainment: null,
      voteAverage: movie.vote_average,
    }));
    res.json(formattedResults);
  } catch (error) {
    console.error("Search Route Error:", error);
    res.status(500).json({ error: "Failed to fetch data from TMDB." });
  }
});

app.get("/get-details", async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;

    const data = await GetMovieDetails(API, id);



    const movieData = {
      title: data.title,
      originalTitle: data.original_title,
      id: data.id,
      budget: data.budget,
      revenue: data.revenue,
      genres: data.genres.map((item: any) => item.name),
      originCountry: data.origin_country,
      originalLanguage: data.original_language,
      poster: data.poster_path,
      backdrop: data.backdrop_path,
      overview: data.overview,
      releaseDate: data.release_date,
      voteAverage: data.vote_average,
      runtime: data.runtime,
      cast: data.cast,
      crew: data.crew
    }

    res.json(movieData)
  } catch (error) {
    console.error("Movie details request error:", error);
    res.status(500).json({ error: "Failed to fetch data from TMDB." });
  }
});


app.get("/set-up", async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;

    const config = await getImageConfiguration(API);

    res.json(config)
  } catch (error) {
    console.error("Movie details request error:", error);
    res.status(500).json({ error: "Failed to fetch data from TMDB." });
  }
});

app.listen(5001, () => console.log("Node server started on port 5001"));
