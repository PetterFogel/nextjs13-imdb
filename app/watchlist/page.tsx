"use client";
import { useStore } from "@/store/store";
import { useEffect, useState } from "react";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";
import { IMovie } from "@/types/movie";

const WatchlistPage = () => {
  const { watchlist } = useStore((state) => state);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setMovies(watchlist);
  }, [watchlist]);

  return (
    <>
      {movies.length === 0 ? (
        <div className=" flex h-40 flex-col items-center justify-center gap-3 md:h-60">
          <h3 className="text-xl lg:text-2xl">Your Watchlist is empty</h3>
          <p className="text-center text-sm [text-wrap:balance]">
            Add movies to your Watchlist to keep track of what you want to watch
          </p>
        </div>
      ) : (
        <MovieItemsGrid movies={movies} />
      )}
    </>
  );
};

export default WatchlistPage;
