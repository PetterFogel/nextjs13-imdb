"use client";

import { IMovie } from "@/types/movie";
import { useStore } from "@/store/store";
import { BookmarkIcon } from "@heroicons/react/20/solid";

type Props = {
  movie: IMovie;
};

const Index = ({ movie }: Props) => {
  const { addToWatchlist } = useStore((state) => state);

  return (
    <button
      onClick={() => addToWatchlist(movie)}
      className="mt-8 inline-flex items-center space-x-2 rounded bg-primary px-3 py-1 text-sm font-bold text-black hover:bg-primaryHover md:mt-8 md:px-4 md:py-2">
      <BookmarkIcon className="h-3 text-black md:h-4" />
      <span className="hidden md:block">|</span>
      <span>Watchlist</span>
    </button>
  );
};

export default Index;
