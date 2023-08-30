"use client";

import { IMovie } from "@/types/movie";
import { useStore } from "@/store/store";
import { BookmarkIcon, CheckIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

type Props = {
  movie: IMovie;
};

const Index = ({ movie }: Props) => {
  const { watchlist, addToWatchlist, removeFromWatchlist } = useStore(
    (state) => state
  );
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const exist = watchlist.find((m) => m.id === movie.id);
    if (exist) return setDisabled(false);
    setDisabled(true);
  }, [watchlist, movie.id]);

  return (
    <div className="mt-4 md:mt-8">
      {disabled ? (
        <button
          onClick={() => addToWatchlist(movie)}
          className="inline-flex items-center space-x-2 rounded bg-primary px-3 py-1 text-sm font-bold text-black hover:bg-primaryHover md:px-4 md:py-2">
          <BookmarkIcon className="h-3 md:h-4" />
          <span>Watchlist</span>
        </button>
      ) : (
        <button
          onClick={() => removeFromWatchlist(movie.id)}
          className="inline-flex items-center space-x-2 rounded bg-gray-600 px-3 py-1 text-sm font-bold text-neutral-200 hover:bg-gray-800 md:px-4 md:py-2">
          <CheckIcon className="h-3 font-extrabold md:h-5" />
          <span>Watchlist</span>
        </button>
      )}
    </div>
  );
};

export default Index;
