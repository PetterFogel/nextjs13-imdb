export const fetchData = async (genre: string | undefined) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${genre}?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};
