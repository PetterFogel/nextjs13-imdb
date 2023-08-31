"use client";
import { useRef } from "react";
import { IMovie } from "@/types/movie";
import {
  EMPTY_MOVIE_URL,
  IMAGE_URL,
  sliderSettings
} from "@/constants/constants";
import SliderArrows from "./SliderArrows";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

type Props = {
  movies: IMovie[];
};

const MovieSlider = ({ movies }: Props) => {
  const sliderRef = useRef<Slider>(null);

  return (
    <div className="relative mt-4">
      <SliderArrows slider={sliderRef} />
      <Slider ref={sliderRef} {...sliderSettings} arrows={false}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <Image
                src={
                  movie?.poster_path
                    ? `${IMAGE_URL}${movie?.poster_path}`
                    : EMPTY_MOVIE_URL
                }
                alt={movie.title}
                height={700}
                width={700}
                priority
              />
              <p className="py-2 text-xs">{movie.title}</p>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
