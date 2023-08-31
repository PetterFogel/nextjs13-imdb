import type { Metadata } from "next";
import { getMovies } from "@/lib/utils";
import { filterItems, queryParams } from "@/constants/constants";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";

type Props = {
  params: { category: string };
};

export const generateMetadata = async ({
  params: { category }
}: Props): Promise<Metadata> => {
  const item = filterItems.find((item) => item.pathname === category);

  return {
    title: item?.title,
    description: category
  };
};

const CategoryPage = async ({ params }: Props) => {
  const { results } = await getMovies(
    `movie/${params.category || "upcoming"}`,
    queryParams
  );

  return <MovieItemsGrid movies={results} />;
};

export default CategoryPage;
