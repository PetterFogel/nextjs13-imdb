import { fetchData } from "@/utils/fetchData";
import Link from "next/link";

type Props = {
  searchParams: { genre: string | undefined };
};

const Home = async ({ searchParams }: Props) => {
  const data = await fetchData(searchParams.genre || "upcoming");

  return (
    <main className="space-y-10">
      <h1 className="text-xl text-primary">Flickify</h1>
      <section className="space-x-4">
        <Link href={`/?genre=upcoming`}>Upcoming</Link>
        <Link href={`/?genre=top_rated`}>Top rated</Link>
        <Link href={`/?genre=popular`}>Popular</Link>
      </section>
      <section>
        {data.results.map((movie: any) => (
          <div key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <h3>{movie.title}</h3>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
