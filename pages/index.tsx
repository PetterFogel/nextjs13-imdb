import type { NextPage } from "next";
import { Loader } from "../src/common/components/Loader/Loader";
import { PageTitle } from "../src/common/components/page-title/PageTitle";
import { useFetchMovies } from "../src/hooks/fetchMoviesHook";
import { HomeList } from "../src/pages/home-page/HomeList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data, isLoading, error } = useFetchMovies();

  if (error) return <h2>Something went wrong...</h2>;

  return (
    <div className={styles.root}>
      <PageTitle title="Welcome to Moviebox" isPrimary />
      {isLoading ? <Loader /> : <HomeList movies={data.results} />}
    </div>
  );
};

export default Home;
