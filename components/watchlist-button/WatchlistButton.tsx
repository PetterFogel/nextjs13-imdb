"use client";

import { IMovie } from "@/types/movie";
import { useStore } from "@/store/store";
import { BookmarkIcon } from "@heroicons/react/20/solid";

type Props = {
  movie: IMovie;
};

const Index = ({ movie }: Props) => {
  const { watchlist, addToWatchlist } = useStore((state) => state);

  return (
    <button
      onClick={() => addToWatchlist(movie)}
      className="inline-flex items-center space-x-2 rounded bg-primary px-4 py-2 font-bold text-black hover:bg-primaryHover">
      <BookmarkIcon className="h-4 text-black" />
      <span>|</span>
      <span>Watchlist</span>
    </button>
  );
};

export default Index;
