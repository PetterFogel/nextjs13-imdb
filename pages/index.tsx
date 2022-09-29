import type { NextPage } from "next";
import { Loader } from "../src/common/components/Loader/Loader";
import { PageTitle } from "../src/common/components/page-title/PageTitle";
import { CategoryTypes } from "../src/common/constants/enums";
import { useFetchMovies } from "../src/hooks/fetchMoviesHook";
import { HomeList } from "../src/pages/home-page/HomeList";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data, isLoading, error } = useFetchMovies(CategoryTypes.Upcoming);

  if (error) return <h2>Something went wrong...</h2>;

  return (
    <div className={styles.root}>
      <PageTitle title="Welcome to Moviebox" isPrimary />
      <p className={styles.subtitle}>
        Feel free to browse movies by category or searching on titles. If you
        find something you like, save it to your favorites list!
      </p>
      <br />
      <br />
      <p className={styles.subtitle}>Meanwhile, checkout upcoming movies:</p>
      {isLoading ? <Loader /> : <HomeList movies={data.results} />}
    </div>
  );
};

export default Home;
