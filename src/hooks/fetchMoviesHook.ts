import useSWR from "swr";

const API_KEY: string = "46eda78843a870bbbc6d78ac7c1be16d";

const category = "popular";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useFetchMovies = () => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${category}?api_key=${API_KEY}&language=en-US&page=1`,
    fetcher
  );

  console.log(data.results);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
