import { getMovieByGenreId } from "@/lib/utils";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";
import type { Metadata } from "next";
import Pagination from "@/components/pagination/Pagination";

type Props = {
  params: { category: string; id: string };
  searchParams: { page: string | undefined; name: string | undefined };
};

export const generateMetadata = async ({
  searchParams: { name }
}: Props): Promise<Metadata> => {
  return {
    title: name,
    description: "Find movies by genre"
  };
};

const GenrePage = async ({
  params: { category, id },
  searchParams: { page, name }
}: Props) => {
  const { results, total_pages } = await getMovieByGenreId(id, page);
  return (
    <section className="mb-8 space-y-8">
      <MovieItemsGrid movies={results} />
      <Pagination
        page={page}
        totalPages={total_pages}
        category={category}
        genreId={id}
        genreName={name}
      />
    </section>
  );
};

export default GenrePage;
