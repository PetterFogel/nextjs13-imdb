import { getMovies } from "@/lib/utils";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";

const HomePage = async () => {
  const { results } = await getMovies("movie/upcoming");

  return (
    <section className="space-y-4">
      <MovieItemsGrid movies={results} />
    </section>
  );
};

export default HomePage;
