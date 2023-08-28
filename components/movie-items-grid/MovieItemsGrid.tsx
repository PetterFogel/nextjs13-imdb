import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/constants/constants";
import { IMovie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";

type Props = {
  movies: IMovie[];
};

const MovieItemsGrid = ({ movies }: Props) => {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {movies.map((movie) => (
        <div key={movie.id} className="">
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
            <div>
              <p className="py-2 text-sm">{movie.title}</p>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default MovieItemsGrid;
