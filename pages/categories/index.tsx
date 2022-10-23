import { GetStaticProps, NextPage } from "next";
import { Movie } from "../../models/movie";
import { ErrorPanel } from "../../src/common/components/error-panel/ErrorPanel";
import { MoviesSlider } from "../../src/common/components/movies-slider/MoviesSlider";
import { PageTitle } from "../../src/common/components/page-title/PageTitle";
import { CategoryTypes } from "../../src/common/constants/enums";
import { fetcher } from "../../src/hooks/fetchMoviesHook";
import styles from "./style/Categories.module.css";

interface CategoriesPageProps {
  movies: Movie[] | undefined;
}

const CategoriesPage: NextPage<CategoriesPageProps> = ({ movies }) => {
  if (!movies) return <ErrorPanel />;

  return (
    <div className={styles.root}>
      <PageTitle title="Top rated" />
      <MoviesSlider movies={movies} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${CategoryTypes.TopRated}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
  );
  const { results } = await res.json();
  return {
    props: {
      movies: results ?? undefined,
    },
  };
};

export default CategoriesPage;
