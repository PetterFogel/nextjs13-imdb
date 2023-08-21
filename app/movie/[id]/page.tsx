import { getMovie } from "@/utils/fetchData";

interface Props {
  params: { id: string };
}

const Movie = async ({ params: { id } }: Props) => {
  const movie = await getMovie(id);

  return (
    <section>
      <h2>{movie.title}</h2>
      <div>{movie.overview}</div>
      <div>{movie.poster_path}</div>
      <div>{movie.vote_average}</div>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      <div>{movie.release_date}</div>
    </section>
  );
};

export default Movie;
