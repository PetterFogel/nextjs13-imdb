import { NextPage } from "next";
import { Movie } from "../../models/movie";
import { MoviesSlider } from "../../src/common/components/movies-slider/MoviesSlider";
import { PageTitle } from "../../src/common/components/page-title/PageTitle";
import { CategoryTypes } from "../../src/common/constants/enums";
import styles from "./style/CategoriesStyle.module.css";

interface CategoriesPageProps {
  movies: Movie[];
}

const CategoriesPage: NextPage<CategoriesPageProps> = ({ movies }) => {
  console.log(movies);
  return (
    <div className={styles.root}>
      <PageTitle title="Top rated" />
      <MoviesSlider movies={movies} />
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${CategoryTypes.TopRated}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  return {
    props: {
      movies: data.results,
    },
  };
};

export default CategoriesPage;
