import Link from "next/link";
import { ReactNode } from "react";

const SearchLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <section className="space-x-4 mt-4 mb-4">
        <Link href={`/search/popular`}>Popular</Link>
        <Link href={`/search/top_rated`}>Top rated</Link>
        <Link href={`/search/upcoming`}>Upcoming</Link>
      </section>
      <div>{children}</div>
    </main>
  );
};

export default SearchLayout;
