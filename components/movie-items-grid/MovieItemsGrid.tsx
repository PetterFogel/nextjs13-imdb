import { IMovie } from "@/types/movie";
import Image from "next/image";
import Link from "next/link";

type Props = {
  movies: IMovie[];
};

const MovieItemsGrid = ({ movies }: Props) => {
  return (
    <section className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <div key={movie.id} className="">
          <Link href={`/movie/${movie.id}`}>
            <Image
              src={`${process.env.IMAGE_URL}${movie?.poster_path}`}
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
