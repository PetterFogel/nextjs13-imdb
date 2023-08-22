import { getMovies } from "@/utils/fetchData";

import Link from "next/link";

type Props = {
  searchParams: { genre: string | undefined };
};

const HomePage = async ({ searchParams }: Props) => {
  const { results } = await getMovies(searchParams.genre || "upcoming");

  return (
    <section className="space-y-10">
      <section className="space-x-4">
        <Link href={`/?genre=upcoming`}>Upcoming</Link>
        <Link href={`/?genre=top_rated`}>Top rated</Link>
        <Link href={`/?genre=popular`}>Popular</Link>
      </section>
      <section>
        {results.map((movie: any) => (
          <div key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
};

export default HomePage;
