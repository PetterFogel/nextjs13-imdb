import { Metadata } from "next";
import { getMovies } from "@/lib/utils";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";
import Pagination from "@/components/pagination/Pagination";

type Props = {
  searchParams: { page: string | undefined };
};

export const metadata: Metadata = {
  title: "Explore",
  description: "Explore by discover by genres, search movies, and more"
};

const ExplorePage = async ({ searchParams: { page } }: Props) => {
  const { results, total_pages } = await getMovies("movie/popular");

  return (
    <section className="mb-8 space-y-8">
      <MovieItemsGrid movies={results} />
      <Pagination page={page} totalPages={total_pages} />
    </section>
  );
};

export default ExplorePage;
