"use client";
import { IMovie } from "@/types/movie";
import { useStore } from "@/store/store";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import { movieSliderSettings } from "@/constants/constants";
import ItemsSlider from "../slider/Slider";
import MovieItem from "../slider/MovieItem";
import Link from "next/link";

const WatchlistSection = () => {
  const { watchlist } = useStore((state) => state);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setMovies(watchlist);
  }, [watchlist]);

  return (
    <section>
      <Link href="/watchlist">
        <div className="flex w-full items-center gap-2">
          <div className="h-5 w-1 rounded-sm bg-primary"></div>
          <h2 className="text-xl font-semibold md:text-2xl">Your watchlist</h2>
          <ChevronRightIcon className="h-8 font-bold md:h-10" />
        </div>
      </Link>
      {movies.length === 0 ? (
        <div className=" flex h-40 flex-col items-center justify-center gap-3 md:h-60">
          <h3 className="text-xl lg:text-2xl">Your Watchlist is empty</h3>
          <p className="text-center text-sm [text-wrap:balance]">
            Add movies to your watchlist to keep track of what you want to watch
          </p>
        </div>
      ) : (
        <ItemsSlider
          settings={movieSliderSettings}
          noArrows={movies.length < 5}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </ItemsSlider>
      )}
    </section>
  );
};

export default WatchlistSection;
