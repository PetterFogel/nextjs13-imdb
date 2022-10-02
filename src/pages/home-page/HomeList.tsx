import { FC } from "react";
import { Movie } from "../../../models/movie";
import { MovieItem } from "../../common/components/movie-item/MovieItem";
import { MoviesSlider } from "../../common/components/movies-slider/MoviesSlider";
import { PageTitle } from "../../common/components/page-title/PageTitle";
import styles from "./style/Home.module.css";

interface HomeListProps {
  movies: Movie[];
}

export const HomeList: FC<HomeListProps> = ({ movies }) => {
  return (
    <>
      <PageTitle title={"Upcoming:"} />
      <MoviesSlider movies={movies} />
    </>
  );
};
