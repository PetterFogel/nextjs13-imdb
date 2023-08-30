import type { Metadata } from "next";
import { getMovie } from "@/lib/utils";
import { StarIcon } from "@heroicons/react/20/solid";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/constants/constants";
import WatchlistButton from "@/components/watchlist-button/WatchlistButton";
import Image from "next/image";

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
    <section className="m-auto flex max-w-5xl gap-4">
      <div className="w-1/3">
        <Image
          src={
            movie?.poster_path
              ? `${IMAGE_URL}${movie.poster_path}`
              : EMPTY_MOVIE_URL
          }
          alt={movie.title}
          height={500}
          width={500}
          priority
        />
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

        <div className="text-sm [text-wrap:balance]">{movie.overview}</div>
        <WatchlistButton movie={movie} />
      </div>
    </section>
  );
};

export default MoviePage;
