"use client";
import { useEffect, useState } from "react";
import { filterItems } from "@/constants/constants";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { getMovieGenres } from "@/lib/utils";
import { IGenre } from "@/types/genre";

const Filter = () => {
  const [selected, setValue] = useState(filterItems[0].path);
  const [genresList, setGenresList] = useState<IGenre[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { genres } = await getMovieGenres();
        setGenresList(genres);
      } catch (error) {
        // Implement toast to handle error
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const genres = genresList.map((item) => ({
    title: item.name,
    pathname: "",
    path: `/explore/genres/${item.id}?name=${item.name}`
  }));

  const modifiedFilterItems = [...filterItems, ...genres];

  return (
    <section className="w-full space-y-4 md:max-w-[200px]">
      <div className="space-y-2">
        <h3 className="hidden text-sm font-bold text-neutral-400 md:block">
          Discover
        </h3>
        <ul className="hidden space-y-2 md:block">
          {filterItems.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                onClick={() => setValue(item.path)}
                className={`w-full underline-offset-4 hover:underline ${
                  selected === item.path ? "underline" : ""
                } `}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-2">
        <h3 className="hidden text-sm font-bold text-neutral-400 md:block">
          Genres
        </h3>
        <ul className="hidden space-y-2 md:block">
          {genresList.map((item, i) => (
            <li key={i} className="text-sm text-neutral-300">
              <Link
                href={`/explore/genres/${item.id}?name=${item.name}`}
                onClick={() => setValue(item.name)}
                className={`w-full underline-offset-4 hover:underline`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative z-50 md:hidden">
        <Dropdown filterItems={modifiedFilterItems} />
      </div>
    </section>
  );
};

export default Filter;
