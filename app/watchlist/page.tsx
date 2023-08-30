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

  return <MovieItemsGrid movies={movies} />;
};

export default WatchlistPage;
