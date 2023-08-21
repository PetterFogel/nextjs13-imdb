import Link from "next/link";

const fetchData = async (genre: string | undefined) => {
  console.log(genre);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

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
            <h3>{movie.title}</h3>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Home;
