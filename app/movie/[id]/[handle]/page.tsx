import { getMovieInfo } from "@/lib/utils";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/constants/constants";
import MovieItemsGrid from "@/components/movie-items-grid/MovieItemsGrid";
import Image from "next/image";

interface Props {
  params: { id: string; handle: string };
}

const HandlePage = async ({ params: { id, handle } }: Props) => {
  const res = await getMovieInfo(id, handle);

  return (
    <>
      {res.cast ? (
        <section className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
          {res.cast.map((item) => (
            <div key={item.id}>
              <Image
                src={
                  item?.profile_path
                    ? `${IMAGE_URL}${item.profile_path}`
                    : EMPTY_MOVIE_URL
                }
                alt={item.name}
                height={200}
                width={200}
                priority
              />
              <div className="mt-2 space-y-1">
                <p className="text-xs">{item.name}</p>
                <p className="text-[11px] text-neutral-400 md:text-xs">
                  {item.character}
                </p>
              </div>
            </div>
          ))}
        </section>
      ) : (
        <MovieItemsGrid movies={res.results} />
      )}
    </>
  );
};

export default HandlePage;
