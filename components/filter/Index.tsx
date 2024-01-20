"use client";
import { useState } from "react";
import { filterItems } from "@/constants/constants";
import Dropdown from "./Dropdown";
import Link from "next/link";

const Filter = () => {
  const [selected, setValue] = useState(filterItems[0].path);

  return (
    <section className="w-full md:max-w-[125px]">
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
      <div className="relative z-50 md:hidden">
        <Dropdown filterItems={filterItems} />
      </div>
    </section>
  );
};

export default Filter;
