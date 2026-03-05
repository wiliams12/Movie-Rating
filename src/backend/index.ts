import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import { discoverMovies, GetMovieDetails } from "./helpers.ts";

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
    console.log(1);
    const movies = await discoverMovies(API, keyword); 
    console.log(2);
    res.json(movies);
  } catch (error) {
    console.error("Search Route Error:", error);
    res.status(500).json({ error: "Failed to fetch data from TMDB." });
  }
});

app.get("/get-details"), async (req: Request, res: Response) => {
  try {
    const id = req.query.id as string;

    const movieData = await GetMovieDetails(API, id);

    res.json(movieData)
  } catch (error) {
    console.error("Movie details request error:", error);
    res.status(500).json({ error: "Failed to fetch data from TMDB." });
  }
};

app.listen(5001, () => console.log("Node server started on port 5000"));
