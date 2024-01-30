"use client";
import { IMovie } from "@/types/movie";
import { useEffect, useRef, useState } from "react";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/constants/constants";
import SliderArrows from "../slider/SliderArrows";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";

interface Props {
  movies: IMovie[];
}

const TrendingSection = ({ movies }: Props) => {
  const sliderRef = useRef<Slider>(null);
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const [isBreakpointLg, setIsBreakpointLg] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsBreakpointLg(window.innerWidth >= 1024);

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const roundedVoteHandler = (vote: number) => Math.floor(vote * 10) / 10;

  return (
    <section className="flex flex-col gap-4 lg:flex-row">
      <div className="w-full max-w-none lg:max-w-2xl xl:max-w-3xl">
        <div className="relative">
          <SliderArrows slider={sliderRef} />
          <Slider
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={4000}
            pauseOnHover={true}
            infinite={true}
            arrows={false}
            asNavFor={nav2 || undefined}
            ref={(slider1) => setNav1(slider1 && slider1)}>
            {movies.map((movie, idx) => (
              <div key={idx} className="group relative">
                {movie.backdrop_path && (
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
                )}
                <Image
                  src={
                    movie?.poster_path
                      ? `${IMAGE_URL}${movie?.backdrop_path}`
                      : EMPTY_MOVIE_URL
                  }
                  alt={movie.title}
                  height={900}
                  width={900}
                  priority
                />
                <Link href={`/movie/${movie.id}`}>
                  <div className="absolute bottom-0 flex w-full items-end gap-4 px-4">
                    <div className=" w-24 md:w-32">
                      <Image
                        src={
                          movie?.poster_path
                            ? `${IMAGE_URL}${movie?.poster_path}`
                            : EMPTY_MOVIE_URL
                        }
                        alt={movie.title}
                        height={200}
                        width={150}
                        priority
                      />
                    </div>
                    <div className="items-start gap-0 py-4 md:items-center md:gap-4">
                      <div className="flex items-center space-x-1">
                        <StarIcon className="mb-1 h-6 text-primary sm:h-8" />
                        <span className="text-1xl md:text-3xl">
                          {roundedVoteHandler(movie.vote_average)}
                        </span>
                      </div>
                      <p className="text-1xl pt-0 font-semibold text-white group-hover:text-white sm:text-neutral-200 md:text-3xl">
                        {movie.title}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="inset-0 w-full overflow-hidden bg-gradient-to-b from-grayDark to-transparent p-2">
        <Slider
          asNavFor={nav1 || undefined}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          vertical={isBreakpointLg ? true : false}
          arrows={false}>
          {movies.map((movie, idx) => (
            <div key={idx}>
              <div className="flex flex-col gap-4 lg:flex-row">
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    src={
                      movie?.poster_path
                        ? `${IMAGE_URL}${movie?.poster_path}`
                        : EMPTY_MOVIE_URL
                    }
                    alt={movie.title}
                    height={100}
                    className="w-full lg:w-auto"
                    width={125}
                    priority
                  />
                </Link>
                <div className="hidden w-full sm:block">
                  <Link href={`/movie/${movie.id}`}>
                    <div className="flex items-center space-x-1">
                      <StarIcon className="h-4 text-primary" />
                      <span>{roundedVoteHandler(movie.vote_average)}</span>
                    </div>
                    <h3 className="text-xs  font-medium lg:text-sm">
                      {movie.title}
                    </h3>
                    <p className="hidden text-xs text-neutral-400 lg:block">
                      {movie.release_date}
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingSection;
