import { QueryParams } from "@/types/queryParams";
import { IMovie, IMovies } from "@/types/movie";

export const getMovie = async (id: string): Promise<IMovie> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

export const fetchMovies = async (
  endpoint: string,
  queryParams: QueryParams
): Promise<IMovies> => {
  const queryString = new URLSearchParams(queryParams).toString();
  const url = `https://api.themoviedb.org/3/${endpoint}?${queryString}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
