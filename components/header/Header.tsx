import { StarIcon } from "@heroicons/react/24/outline";
import SearchPanel from "../search-panel/SearchPanel";
import MobileMenu from "../mobile-menu/MobileMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center bg-grayDark px-4 py-2 lg:px-6">
      <div className="block flex-1 md:hidden">
        <MobileMenu />
      </div>
      <nav className="flex w-full flex-1 items-center justify-center gap-6">
        <Link href="/">
          <h1 className="text-xl text-primary">Flickify</h1>
        </Link>
        <ul className="hidden flex-1 gap-6 md:flex">
          <li>
            <Link
              href="/search"
              className="text-neutral-400 underline-offset-4 hover:text-white hover:underline">
              Genres
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden flex-1 justify-center md:flex">
        <SearchPanel />
      </div>
      <div className="flex flex-1 justify-end">
        <StarIcon className="h-6 cursor-pointer text-neutral-400 hover:text-white" />
      </div>
    </header>
  );
};

export default Header;
