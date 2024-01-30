import { ICredits } from "./credits";

export interface IMovie {
  id: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
  genres: { id: number; name: string }[];
}

export interface IMovies {
  results: IMovie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export interface IMovieDetails extends IMovie {
  runtime: number;
  backdrop_path: string;
}

export interface IMovieInfo extends ICredits, IMovies {}
