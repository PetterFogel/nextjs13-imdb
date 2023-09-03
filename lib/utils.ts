import { ICredits } from "@/types/credits";
import { QueryParams } from "@/types/queryParams";
import { IMovieDetails, IMovieInfo, IMovies } from "@/types/movie";

export const getMovie = async (id: string): Promise<IMovieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  // await wait(2000);

  return await res.json();
};

export const getMovies = async (
  endpoint: string,
  queryParams: QueryParams
): Promise<IMovies> => {
  const queryString = new URLSearchParams(queryParams).toString();
  const url = `https://api.themoviedb.org/3/${endpoint}?${queryString}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // await wait(2000);

  return res.json();
};

export const getMovieRecommendations = async (
  movieId: string
): Promise<IMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // await wait(2000);

  return res.json();
};

export const getMovieCredits = async (movieId: string): Promise<ICredits> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // await wait(2000);

  return res.json();
};

export const getMovieInfo = async (
  movieId: string,
  category: string
): Promise<IMovieInfo> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/${category}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  // await wait(2000);

  return res.json();
};

export const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
