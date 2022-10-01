import { FC } from "react";
import { Movie } from "../../../models/movie";
import { MovieItem } from "../../common/components/movie-item/MovieItem";
import { PageTitle } from "../../common/components/page-title/PageTitle";
import styles from "./style/Home.module.css";

interface HomeListProps {
  movies: Movie[];
}

export const HomeList: FC<HomeListProps> = ({ movies }) => {
  return (
    <>
      <PageTitle title={"Upcoming:"} />
      <div className={styles.movieListContainer}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};
