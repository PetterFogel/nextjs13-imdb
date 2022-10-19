import { MoviesResponse } from "../../models/movie";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchMovies = (category: string): MoviesResponse => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${category}?api_key=46eda78843a870bbbc6d78ac7c1be16d&language=en-US&page=1`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
