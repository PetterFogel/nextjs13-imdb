import { FC } from "react";
import { Movie } from "../../../../models/movie";
import { MovieItem } from "../movie-item/MovieItem";
import { sliderSettings } from "../../constants/sliderSettings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface MoviesSliderProps {
  movies: Movie[];
}

export const MoviesSlider: FC<MoviesSliderProps> = ({ movies }) => {
  return (
    <>
      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Slider>
    </>
  );
};
