import { IGenres } from "@/types/genre";
import { ICredits } from "@/types/credits";
import { queryParams } from "@/constants/constants";
import { IMovieDetails, IMovieInfo, IMovies } from "@/types/movie";

export const getMovie = async (id: string): Promise<IMovieDetails> => {
  const res = await fetch(
    `${process.env.API_URL}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return await res.json();
};

export const getMovies = async (
  endpoint: string,
  page?: string,
  searchValue?: string
): Promise<IMovies> => {
  const modifiedQueryParams = searchValue
    ? {
        ...queryParams,
        query: searchValue
      }
    : { ...queryParams };

  const pageString = page ? `&page=${page}` : "";
  const queryString = new URLSearchParams(modifiedQueryParams).toString();

  const url = `${process.env.API_URL}/${endpoint}?${queryString}/${pageString}`;
  const res = await fetch(url);

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export const getMovieRecommendations = async (
  movieId: string
): Promise<IMovies> => {
  const res = await fetch(
    `${process.env.API_URL}/movie/${movieId}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export const getMovieCredits = async (movieId: string): Promise<ICredits> => {
  const res = await fetch(
    `${process.env.API_URL}/movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export const getMovieInfo = async (
  movieId: string,
  category: string
): Promise<IMovieInfo> => {
  const res = await fetch(
    `${process.env.API_URL}/movie/${movieId}/${category}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export const getMovieGenres = async (): Promise<IGenres> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export const getMovieByGenreId = async (
  genreId: string,
  page?: string
): Promise<IMovies> => {
  const pageString = page ? `&page=${page}` : "&page=1";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/discover/movie/?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=${genreId}${pageString}`
  );

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};
