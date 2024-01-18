import type { Metadata } from "next";
import { Suspense } from "react";
import { getMovie } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/constants/constants";
import WatchlistButton from "@/components/watchlist-button/WatchlistButton";
import Recommendations from "./Recommendations";
import Image from "next/image";
import Link from "next/link";
import Cast from "./Cast";

interface Props {
  params: { id: string };
}

export const generateMetadata = async ({
  params: { id }
}: Props): Promise<Metadata> => {
  const movie = await getMovie(id);

  return {
    title: movie.title,
    description: movie.overview
  };
};

const MoviePage = async ({ params: { id } }: Props) => {
  const movie = await getMovie(id);

  return (
    <section className="m-auto mb-12 max-w-5xl space-y-16">
      <section className="flex gap-4">
        <div className="w-1/3">
          <Link
            href={
              movie?.poster_path
                ? `${IMAGE_URL}${movie.poster_path}`
                : EMPTY_MOVIE_URL
            }>
            <Image
              src={
                movie?.poster_path
                  ? `${IMAGE_URL}${movie.poster_path}`
                  : EMPTY_MOVIE_URL
              }
              alt={movie.title}
              height={300}
              width={300}
              priority
            />
          </Link>
        </div>
        <div className="flex w-2/3 flex-col items-start gap-2">
          <div className="flex items-center gap-4">
            <h2 className="text-xl lg:text-3xl">{movie.title}</h2>
            <div className="flex items-center gap-1">
              <StarIcon className="h-5 text-primary lg:h-7" />
              <span className="text-lg lg:text-2xl">
                {Math.round(movie.vote_average)}
              </span>
            </div>
          </div>

          <div className="flex flex-col-reverse gap-1 text-xs text-neutral-400 lg:flex-row lg:gap-6 lg:text-sm">
            <div className="flex gap-3">
              <p>{movie.release_date}</p>
              {movie.runtime && (
                <>
                  <div>|</div>
                  <p>{movie.runtime} m</p>
                </>
              )}
              <div className="hidden lg:block">|</div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>

          <div className="text-xs [text-wrap:balance] md:text-sm">
            {movie.overview}
          </div>
          <WatchlistButton movie={movie} isTextBtn />
        </div>
      </section>
      <Suspense
        fallback={
          <div>
            <div className="mb-4 h-7 w-20 animate-pulse bg-neutral-800" />
            <div className="grid w-full grid-cols-3  gap-4 md:grid-cols-5">
              <div className="h-48 animate-pulse bg-neutral-800 sm:h-56 md:h-80" />
              <div className="h-48 w-auto animate-pulse bg-neutral-800 sm:h-56 md:h-80" />
              <div className="h-48 w-auto animate-pulse bg-neutral-800 sm:h-56 md:h-80" />
              <div className="hidden h-80 w-auto animate-pulse bg-neutral-800 md:block" />
              <div className="hidden h-80 w-auto animate-pulse bg-neutral-800 md:block" />
            </div>
          </div>
        }>
        <Cast movieId={movie.id} />
      </Suspense>
      <Suspense
        fallback={
          <div>
            <div className="mb-4 h-7 w-44 animate-pulse bg-neutral-800" />
            <div className="grid w-full grid-cols-3  gap-4 md:grid-cols-4">
              <div className="h-48 animate-pulse bg-neutral-800 sm:h-56 md:h-80" />
              <div className="h-48 w-auto animate-pulse bg-neutral-800 sm:h-56 md:h-80" />
              <div className="h-48 w-auto animate-pulse bg-neutral-800 sm:h-56 md:h-80" />
              <div className="hidden h-80 w-auto animate-pulse bg-neutral-800 md:block" />
            </div>
          </div>
        }>
        <Recommendations movieId={movie.id} />
      </Suspense>
    </section>
  );
};

export default MoviePage;
