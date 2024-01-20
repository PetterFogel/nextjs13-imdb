import type { Metadata } from "next";
import { getMovies } from "@/lib/utils";
import { filterItems } from "@/constants/constants";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";
import Pagination from "@/components/pagination/Pagination";

type Props = {
  params: { category: string };
  searchParams: { page: string | undefined };
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

const CategoryPage = async ({ params, searchParams }: Props) => {
  const { page } = searchParams;
  const { category } = params;
  const { results, total_pages } = await getMovies(
    `movie/${category || "upcoming"}`,
    page
  );

  return (
    <section className="mb-8 space-y-8">
      <MovieItemsGrid movies={results} />
      <Pagination page={page} totalPages={total_pages} category={category} />
    </section>
  );
};

export default CategoryPage;
