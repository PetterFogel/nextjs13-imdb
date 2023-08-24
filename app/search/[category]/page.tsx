import { getMovies } from "@/lib/utils";
import { queryParams } from "@/constants/constants";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const { results } = await getMovies(
    `movie/${params.category || "upcoming"}`,
    queryParams
  );

  return <MovieItemsGrid movies={results} />;
};

export default CategoryPage;
