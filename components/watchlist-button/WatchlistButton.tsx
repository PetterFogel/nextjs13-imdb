"use client";

import { IMovie } from "@/types/movie";
import { useStore } from "@/store/store";
import { useEffect, useState } from "react";
import { BookmarkIcon, CheckIcon, PlusIcon } from "@heroicons/react/20/solid";

type Props = {
  movie: IMovie;
  isTextBtn?: boolean;
};

const Index = ({ movie, isTextBtn }: Props) => {
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
    <>
      {isTextBtn ? (
        <div className="mt-4 md:mt-8">
          {disabled ? (
            <button
              onClick={() => addToWatchlist(movie)}
              className="inline-flex items-center space-x-2 rounded bg-gray-600 px-3 py-1 text-sm font-bold text-neutral-200 hover:bg-gray-800 md:px-4 md:py-2">
              <PlusIcon className="h-4 font-extrabold md:h-6" />
              <span>Watchlist</span>
            </button>
          ) : (
            <button
              onClick={() => removeFromWatchlist(movie.id)}
              className="inline-flex items-center space-x-2 rounded bg-primary px-3 py-1 text-sm font-bold text-black hover:bg-primaryHover md:px-4 md:py-2">
              <CheckIcon className="h-4 md:h-6" />
              <span>Watchlist</span>
            </button>
          )}
        </div>
      ) : (
        <>
          {disabled ? (
            <div className="group" onClick={() => addToWatchlist(movie)}>
              <BookmarkIcon className="absolute -right-1 -top-1 z-10 h-10 cursor-pointer text-gray-500 group-hover:text-gray-700" />
              <PlusIcon className="absolute right-1 top-1 z-30 h-6 cursor-pointer text-neutral-200" />
            </div>
          ) : (
            <div
              className="group"
              onClick={() => removeFromWatchlist(movie.id)}>
              <BookmarkIcon className="absolute -right-1 -top-1 z-10 h-10 cursor-pointer text-primary group-hover:text-primaryHover" />
              <CheckIcon className="absolute right-1 top-1 z-30 h-6 cursor-pointer text-black " />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Index;
