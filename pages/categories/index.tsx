import { NextPage } from "next";
import { Loader } from "../../src/common/components/Loader/Loader";
import { MoviesSlider } from "../../src/common/components/movies-slider/MoviesSlider";
import { PageTitle } from "../../src/common/components/page-title/PageTitle";
import { CategoryTypes } from "../../src/common/constants/enums";
import { useFetchMovies } from "../../src/hooks/fetchMoviesHook";
import styles from "./style/CategoriesStyle.module.css";

const CategoriesPage: NextPage = () => {
  const { data, isLoading, error } = useFetchMovies(CategoryTypes.TopRated);

  if (error) return <h2>Something went wrong...</h2>;

  return (
    <div className={styles.root}>
      <PageTitle title="Top rated" />
      {isLoading ? <Loader /> : <MoviesSlider movies={data.results} />}
    </div>
  );
};

export default CategoriesPage;
