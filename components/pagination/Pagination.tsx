"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  page: string | undefined;
  totalPages: number;
  category?: string;
  searchValue?: string;
  genreId?: string;
  genreName?: string;
};

const Pagination = ({
  page,
  totalPages,
  category,
  searchValue,
  genreId,
  genreName
}: Props) => {
  const pathname = usePathname();

  const currentPage = page ? Number(page) : 1;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const categoryPath = category ? `/${category}` : "";
  const searchValuePath = searchValue ? `?q=${searchValue}` : "";
  const genrePath = genreId && genreName ? `/${genreId}?name=${genreName}` : "";

  const nextPagePath =
    searchValuePath || genrePath ? `&page=${nextPage}` : `?page=${nextPage}`;

  const prevPagePath =
    searchValuePath || genrePath ? `&page=${prevPage}` : `?page=${prevPage}`;

  const pathUrl = `${categoryPath}${searchValuePath}${genrePath}`;

  const firstSegment = pathname.split("/")[1];

  return (
    <div className="mt-8 flex items-center justify-center gap-8">
      {currentPage > 1 && (
        <Link
          href={`/${firstSegment}${pathUrl}${prevPagePath}`}
          className="rounded-lg border border-none bg-grayDark px-4 py-2 text-sm tracking-wider  ring-1 ring-neutral-400/50 hover:ring-neutral-400">
          Previous
        </Link>
      )}
      <p>
        Page {currentPage} of {totalPages}
      </p>
      {currentPage < totalPages && (
        <Link
          href={`/${firstSegment}${pathUrl}${nextPagePath}`}
          className="rounded-lg border border-none bg-grayDark px-4 py-2 text-sm tracking-wider ring-1 ring-neutral-400/50 hover:ring-neutral-400">
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
