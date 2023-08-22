import { fetchMovies } from "@/utils/fetchData";
import { queryParams } from "@/constants/constants";
import Link from "next/link";

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const { results } = await fetchMovies(
    `movie/${params.category || "upcoming"}`,
    queryParams
  );

  return (
    <section>
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

export default CategoryPage;
