import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { discoverMovies, GetMovieDetails, getGenreText } from "./helpers.ts";

const app = express();

const API = process.env.TMDB_API_KEY as string;

const rawGenres = await getGenreText(API); 

const genre_bindings: Record<number, string> = {};
rawGenres.forEach((genre: { id: number; name: string }) => {
  genre_bindings[genre.id] = genre.name;
});

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
    res.json({
      image: movies.backdrop_path,
      genres: movies.genre_ids.map((id: number) => genre_bindings[id]),
    });
  } catch (error) {
    console.error("Search Route Error:", error);
    res.status(500).json({ error: "Failed to fetch data from TMDB." });
  }
});


: 
adult
: 
false
backdrop_path
: 
"/2w4xG178RpB4MDAIfTkqAuSJzec.jpg"
genre_ids
: 
Array(3)
0
: 
12
1
: 
28
2
: 
878
length
: 
3
[[Prototype]]
: 
Array(0)
id
: 
11
original_language
: 
"en"
original_title
: 
"Star Wars"
overview
: 
"Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."
popularity
: 
17.3502
poster_path
: 
"/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg"
release_date
: 
"1977-05-25"
title
: 
"Star Wars"
video
: 
false
vote_average
: 
8.2
vote_count
: 
22000

app.get("/get-details", async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;

    const movieData = await GetMovieDetails(API, id);

    res.json(movieData)
  } catch (error) {
    console.error("Movie details request error:", error);
    res.status(500).json({ error: "Failed to fetch data from TMDB." });
  }
});

app.listen(5001, () => console.log("Node server started on port 5001"));
