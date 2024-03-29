import { Settings } from "react-slick";
import { IFilterItem } from "@/types/filterItems";
import { QueryParams } from "@/types/queryParams";

export const queryParams: QueryParams = {
  api_key: process.env.API_KEY || "",
  language: "en-US"
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/original";

export const EMPTY_MOVIE_URL =
  "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg";

export const filterItems: IFilterItem[] = [
  {
    title: "Popular",
    path: "/explore/popular",
    pathname: "popular"
  },
  {
    title: "Now playing",
    path: "/explore/now_playing",
    pathname: "now_playing"
  },
  {
    title: "Top rated",
    path: "/explore/top_rated",
    pathname: "top_rated"
  },
  {
    title: "Upcoming",
    path: "/explore/upcoming",
    pathname: "upcoming"
  }
];

export const movieSliderSettings: Settings = {
  infinite: false,
  speed: 400,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2
      }
    }
  ]
};

export const castSliderSettings: Settings = {
  infinite: false,
  speed: 400,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 2
      }
    }
  ]
};
