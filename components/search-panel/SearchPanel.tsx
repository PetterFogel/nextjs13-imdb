"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const SearchPanel = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState<string | null>("");

  useEffect(() => {
    setInputValue(searchParams?.get("q" || ""));
  }, [setInputValue, searchParams]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newParams = new URLSearchParams(searchParams.toString());

    if (!inputValue) return newParams.delete("q");
    newParams.set("q", inputValue);
    const paramsString = newParams.toString();
    const queryString = `${paramsString.length ? `?${paramsString}` : ""}`;

    router.push(`/search/${queryString}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
      <input
        type="text"
        name="search"
        placeholder="Search for movies..."
        autoComplete="off"
        value={inputValue || ""}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full appearance-none rounded-lg border border-none bg-grayDark px-4 py-2 text-sm tracking-wider text-white ring-1 ring-neutral-400/50 placeholder:text-neutral-400"
      />
      <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
        <MagnifyingGlassIcon className="text-net h-4 text-neutral-400" />
      </div>
    </form>
  );
};

export default SearchPanel;
