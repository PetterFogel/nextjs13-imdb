import { getMovies } from "@/lib/utils";
import { queryParams } from "@/constants/constants";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";

const HomePage = async () => {
  const { results } = await getMovies("movie/upcoming", queryParams);

  return (
    <section className="space-y-4">
      <MovieItemsGrid movies={results} />
    </section>
  );
};

export default HomePage;
