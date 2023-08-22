import Link from "next/link";
import SearchPanel from "../search-panel/SearchPanel";

const Header = () => {
  return (
    <header className="flex place-items-center space-x-8">
      <Link href="/">
        <h1 className="text-xl text-primary">Flickify</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/search">Genres</Link>
          </li>
        </ul>
      </nav>
      <SearchPanel />
    </header>
  );
};

export default Header;
