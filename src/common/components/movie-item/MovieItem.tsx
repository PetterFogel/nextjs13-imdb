/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Movie } from "../../../../models/movie";
import styles from "./style/MovieItem.module.css";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem: FC<MovieItemProps> = ({ movie }) => {
  const moviePoster = `https://image.tmdb.org/t/p/w1280/${movie.poster_path}`;

  return (
    <div className={styles.cardContainer}>
      <img src={moviePoster} alt={movie.title} className={styles.imageHolder} />
      <div className={styles.movieInfo}>
        <p className={styles.title}>{movie.title}</p>
        <p className={styles.rating}>{movie.vote_average}</p>
      </div>
    </div>
  );
};
