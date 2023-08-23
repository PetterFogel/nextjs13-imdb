import { getMovies } from "@/lib/utils";
import { queryParams } from "@/constants/constants";
import Link from "next/link";

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const { results } = await getMovies(
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
