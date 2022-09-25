import type { NextPage } from "next";
import { useFetchMovies } from "../src/hooks/fetchMoviesHook";
import { HomeList } from "../src/pages/home-page/HomeList";

const Home: NextPage = () => {
  const { data, isLoading, error } = useFetchMovies();

  if (error) return <h2>Something went wrong...</h2>;

  return (
    <>
      <h1>Welcome to movie Box</h1>
      {isLoading ? <h3>Loading...</h3> : <HomeList movies={data.results} />}
    </>
  );
};

export default Home;
