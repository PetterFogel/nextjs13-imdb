import { ICredits } from "@/types/credits";
import { queryParams } from "@/constants/constants";
import { IMovieDetails, IMovieInfo, IMovies } from "@/types/movie";

export const getMovie = async (id: string): Promise<IMovieDetails> => {
  const res = await fetch(
    `${process.env.API_URL}/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`
  );

  return await res.json();
};

export const getMovies = async (
  endpoint: string,
  searchValue?: string,
  page?: string
): Promise<IMovies> => {
  const modifiedQueryParams = searchValue
    ? {
        ...queryParams,
        query: searchValue,
        page: page || "1"
      }
    : { ...queryParams, page: page || "1" };

  const queryString = new URLSearchParams(modifiedQueryParams).toString();

  const url = `${process.env.API_URL}/${endpoint}?${queryString}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getMovieRecommendations = async (
  movieId: string
): Promise<IMovies> => {
  const res = await fetch(
    `${process.env.API_URL}/movie/${movieId}/recommendations?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getMovieCredits = async (movieId: string): Promise<ICredits> => {
  const res = await fetch(
    `${process.env.API_URL}/movie/${movieId}/credits?api_key=${process.env.API_KEY}&language=en-US`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getMovieInfo = async (
  movieId: string,
  category: string
): Promise<IMovieInfo> => {
  const res = await fetch(
    `${process.env.API_URL}/movie/${movieId}/${category}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const wait = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
