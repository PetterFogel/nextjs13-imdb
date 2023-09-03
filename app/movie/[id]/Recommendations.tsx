import { movieSliderSettings } from "@/constants/constants";
import { getMovieRecommendations } from "@/lib/utils";
import ItemsSlider from "@/components/slider/Slider";
import MovieItem from "@/components/slider/MovieItem";
import Link from "next/link";

type Props = {
  movieId: string;
};

const Recommendations = async ({ movieId }: Props) => {
  const { results } = await getMovieRecommendations(movieId);

  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-base md:text-xl">We also recommend:</h3>
        <Link
          href={`/movie/${movieId}/recommendations`}
          className="text-sm underline underline-offset-4 md:text-base">
          See all
        </Link>
      </div>
      <ItemsSlider settings={movieSliderSettings}>
        {results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </ItemsSlider>
    </section>
  );
};

export default Recommendations;
