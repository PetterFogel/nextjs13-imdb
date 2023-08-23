import { getMovies } from "@/lib/utils";
import { queryParams } from "@/constants/constants";
import Link from "next/link";

const HomePage = async () => {
  const { results } = await getMovies("movie/upcoming", queryParams);

  return (
    <section className="space-y-4">
      <h1>Welcome to Flickify</h1>
      <h2>Upcoming Movies</h2>
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
