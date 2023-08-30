import { IMovie } from "@/types/movie";
import { StarIcon } from "@heroicons/react/24/solid";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/constants/constants";
import WatchlistButton from "../watchlist-button/WatchlistButton";
import Image from "next/image";
import Link from "next/link";

type Props = {
  movies: IMovie[];
};

const MovieItemsGrid = ({ movies }: Props) => {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {movies.map((movie) => (
        <div key={movie.id} className="relative">
          <WatchlistButton movie={movie} />
          <Link href={`/movie/${movie.id}`}>
            <Image
              src={
                movie?.poster_path
                  ? `${IMAGE_URL}${movie?.poster_path}`
                  : EMPTY_MOVIE_URL
              }
              alt={movie.title}
              height={700}
              width={700}
              priority
            />
            <div className="flex items-center space-x-4">
              <p className="py-2 text-sm">{movie.title}</p>
              <div className="flex items-center space-x-1">
                <StarIcon className="h-4 text-primary" />
                <span>{movie.vote_average}</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default MovieItemsGrid;
