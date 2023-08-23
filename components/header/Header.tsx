import { StarIcon } from "@heroicons/react/24/outline";
import SearchPanel from "../search-panel/SearchPanel";
import MobileMenu from "../mobile-menu/MobileMenu";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center px-4 py-2 lg:px-6 bg-grayDark">
      <div className="block md:hidden flex-1">
        <MobileMenu />
      </div>
      <nav className="flex items-center justify-center flex-1 w-full">
        <Link href="/">
          <h1 className="text-xl text-primary mr-6">Flickify</h1>
        </Link>
        <ul className="hidden md:flex gap-6 flex-1">
          <li>
            <Link
              href="/search"
              className="text-neutral-400 underline-offset-4 hover:text-white hover:underline"
            >
              Genres
            </Link>
          </li>
        </ul>
      </nav>
      <div className="hidden justify-center md:flex flex-1">
        <SearchPanel />
      </div>
      <div className="flex justify-end flex-1">
        <StarIcon className="h-6 text-neutral-400 hover:text-white cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
