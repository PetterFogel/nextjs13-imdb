import { getMovies } from "@/lib/utils";
import TrendingSection from "@/components/hero-section/TrendingSection";

const HomePage = async () => {
  const { results: movies } = await getMovies("trending/movie/day");

  return (
    <section className="xs:bg-red-500 m-auto mb-8 w-full max-w-3xl space-y-6 lg:max-w-5xl xl:max-w-6xl">
      <h2 className="text-2xl font-bold text-primary md:text-3xl">
        Trending Today
      </h2>
      <TrendingSection movies={movies} />
    </section>
  );
};

export default HomePage;
