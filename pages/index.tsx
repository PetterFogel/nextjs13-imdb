import type { NextPage } from "next";
import { useFetchMovies } from "../src/hooks/fetchMoviesHook";

const Home: NextPage = () => {
  const { data, isLoading, error } = useFetchMovies();

  console.log(data);

  if (error) return <h2>Something went wrong...</h2>;

  return (
    <>
      <h1>Welcome to movie Box</h1>
      {isLoading ? <h3>Loading...</h3> : <p>Test</p>}
    </>
  );
};

export default Home;
