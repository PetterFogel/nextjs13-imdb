import { MoviesResponse } from "../../models/movie";
import useSWR from "swr";

const category = "popular";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchMovies = (): MoviesResponse => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
