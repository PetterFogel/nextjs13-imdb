import { IMovie } from "@/types/movie";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";

type Props = {
  movie: IMovie;
};

const MovieItem = ({ movie }: Props) => {
  return (
    <div key={movie.id}>
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
        <p className="hidden py-2 text-xs md:block">{movie.title}</p>
      </Link>
    </div>
  );
};

export default MovieItem;
