"use client";
import { IMovie } from "@/types/movie";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon
} from "@heroicons/react/20/solid";
import Slider, { Settings } from "react-slick";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import SliderArrows from "./SliderArrows";

type Props = {
  movies: IMovie[];
};

const MovieSlider = ({ movies }: Props) => {
  const sliderRef = useRef<Slider>(null);

  const sliderSettings: Settings = {
    infinite: false,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 4
  };

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
              <div className="hidden items-center space-x-4 md:flex">
                <p className="py-2 text-xs">{movie.title}</p>
                <div className="flex items-center space-x-1">
                  <StarIcon className="h-4 text-primary" />
                  <span className="text-xs">{movie.vote_average}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
