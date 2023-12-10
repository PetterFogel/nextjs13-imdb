import { Metadata } from "next";
import { getMovies } from "@/lib/utils";
import { queryParams } from "@/constants/constants";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";

type Props = {
  searchParams: { q: string | undefined };
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
  const { q: searchValue } = searchParams;
  const { results } = await getMovies(
    searchValue ? "search/movie" : "movie/popular",
    searchValue
      ? {
          ...queryParams,
          query: searchValue
        }
      : queryParams
  );

  return (
    <section>
      {searchValue && results.length === 0 && (
        <p className="mb-4">
          There are no movies that match{" "}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      )}
      <MovieItemsGrid movies={results} />
    </section>
  );
};

export default SearchPage;
