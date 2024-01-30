import { getMovies } from "@/lib/utils";
import WatchlistSection from "@/components/hero-section/WatchlistSection";
import TrendingSection from "@/components/hero-section/TrendingSection";

const HomePage = async () => {
  const { results: movies } = await getMovies("trending/movie/day");

  return (
    <section className="m-auto mb-8 w-full max-w-3xl space-y-8 lg:max-w-5xl xl:max-w-6xl">
      <TrendingSection movies={movies} />
      <WatchlistSection />
    </section>
  );
};

export default HomePage;
