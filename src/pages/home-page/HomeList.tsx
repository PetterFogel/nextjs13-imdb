import { FC } from "react";
import { Movie } from "../../../models/movie";

interface HomeListProps {
  movies: Movie[];
}

export const HomeList: FC<HomeListProps> = ({ movies }) => {
  return (
    <>
      <h2>Movie List</h2>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
        </div>
      ))}
    </>
  );
};
