interface Props {
  params: { id: string };
}

const Movie = ({ params: { id } }: Props) => {
  return <div>{id}</div>;
};

export default Movie;
