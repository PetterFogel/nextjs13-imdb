import { IMovie, IMovies } from "@/types/movie";

export const getMovies = async (
  genre: string | undefined
): Promise<IMovies> => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}&language=en-US&page=1`
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
