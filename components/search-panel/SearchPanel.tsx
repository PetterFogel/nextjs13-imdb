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
    <form onSubmit={onSubmit} className="flex items-center ml-16">
      <input
        type="text"
        name="search"
        placeholder="Search for movies..."
        autoComplete="off"
        value={inputValue || ""}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div>
        <MagnifyingGlassIcon className="h-4" />
      </div>
    </form>
  );
};

export default SearchPanel;
