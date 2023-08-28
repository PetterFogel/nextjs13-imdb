import { QueryParams } from "@/types/queryParams";
import { IMovieDetails, IMovies } from "@/types/movie";

export const getMovie = async (id: string): Promise<IMovieDetails> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  await wait(2000);

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

  await wait(2000);

  return res.json();
};

export const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
