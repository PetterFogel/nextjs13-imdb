export interface IMovie {
  id: string;
  title: string;
  poster_path: string;
  vote_average: string;
  overview: string;
  release_date: string;
  genres: { id: number; name: string }[];
}

export interface IMovies {
  results: IMovie[];
}
