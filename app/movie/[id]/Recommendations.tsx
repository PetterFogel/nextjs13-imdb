import { getMovieRecommendations } from "@/lib/utils";
import MovieSlider from "@/components/movie-slider/MovieSlider";

type Props = {
  movieId: string;
};

const Recommendations = async ({ movieId }: Props) => {
  const { results } = await getMovieRecommendations(movieId);

  return (
    <section>
      <h3 className="text-xl">We also recommend:</h3>
      <MovieSlider movies={results} />
    </section>
  );
};

export default Recommendations;
