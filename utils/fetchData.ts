import { IMovie, IMovies } from "@/types/movie";

const API_KEY = process.env.API_KEY;

export const getMovies = async (
  genre: string | undefined
): Promise<IMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getMovie = async (id: string): Promise<IMovie> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`
  );
  return await res.json();
};

export const getSearchedMovies = async (
  searchValue: string | undefined
): Promise<IMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchValue}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
