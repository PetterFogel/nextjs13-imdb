import { Metadata } from "next";
import { getMovies } from "@/lib/utils";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";
import Pagination from "@/components/pagination/Pagination";

type Props = {
  searchParams: { q: string | undefined; page: string | undefined };
};

export const generateMetadata = async ({
  searchParams: { q: searchValue }
}: Props): Promise<Metadata> => {
  return {
    title: searchValue || "Search",
    description: "Search for any movie you desire."
  };
};

const SearchPage = async ({ searchParams }: Props) => {
  const { q: searchValue, page } = searchParams;
  const { results, total_pages } = await getMovies(
    searchValue ? "search/movie" : "movie/popular",
    page,
    searchValue
  );

  return (
    <section className="mb-8 space-y-8">
      {searchValue && results.length === 0 && (
        <p className="mb-4">
          There are no movies that match{" "}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      )}
      <MovieItemsGrid movies={results} />
      <Pagination
        page={page}
        totalPages={total_pages}
        searchValue={searchValue}
      />
    </section>
  );
};

export default SearchPage;
