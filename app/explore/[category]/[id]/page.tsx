import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";
import Pagination from "@/components/pagination/Pagination";
import { getMovieByGenreId } from "@/lib/utils";
import React from "react";

type Props = {
  params: { category: string; id: string };
  searchParams: { page: string | undefined; name: string | undefined };
};

const GenrePage = async ({
  params: { category, id },
  searchParams: { page, name }
}: Props) => {
  console.log(name);
  const { results, total_pages } = await getMovieByGenreId(id);

  return (
    <section className="mb-8 space-y-8">
      <MovieItemsGrid movies={results} />
    </section>
  );
};

export default GenrePage;
