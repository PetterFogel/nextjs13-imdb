import { getSearchedMovies } from "@/utils/fetchData";
import Link from "next/link";

type Props = {
  searchParams: { q: string | undefined };
};

const SearchPage = async ({ searchParams }: Props) => {
  const { q: searchValue } = searchParams;
  const { results } = await getSearchedMovies(searchValue);

  return (
    <section>
      {searchValue && results.length === 0 && (
        <p className="mb-4">
          There are no movies that match{" "}
          <span className="font-bold">&quot;{searchValue}&quot;</span>
        </p>
      )}
      {results.map((movie: any) => (
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
