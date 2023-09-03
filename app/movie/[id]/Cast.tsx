import ItemsSlider from "@/components/slider/Slider";
import {
  EMPTY_MOVIE_URL,
  IMAGE_URL,
  castSliderSettings
} from "@/constants/constants";
import { getMovieCredits } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  movieId: string;
};

const Cast = async ({ movieId }: Props) => {
  const { cast } = await getMovieCredits(movieId);

  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-base md:text-xl">Cast:</h3>
        <Link
          href={`/movie/${movieId}/credits`}
          className="text-sm underline underline-offset-4 md:text-base">
          See all
        </Link>
      </div>
      <ItemsSlider settings={castSliderSettings}>
        {cast.map((item) => (
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
      </ItemsSlider>
    </section>
  );
};

export default Cast;
