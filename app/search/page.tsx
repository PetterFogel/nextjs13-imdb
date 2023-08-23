import { getMovies } from "@/lib/utils";
import { queryParams } from "@/constants/constants";
import Link from "next/link";

type Props = {
  searchParams: { q: string | undefined };
};

const SearchPage = async ({ searchParams }: Props) => {
  const { q: searchValue } = searchParams;
  const { results } = await getMovies(
    searchValue ? "search/movie" : "movie/popular",
    searchValue
      ? {
          ...queryParams,
          query: searchValue,
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
      {results.map((movie) => (
        <div key={movie.id}>
          <Link href={`/movie/${movie.id}`}>
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default SearchPage;
