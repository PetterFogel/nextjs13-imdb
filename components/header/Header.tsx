import Link from "next/link";
import SearchPanel from "../search-panel/SearchPanel";

const Header = () => {
  return (
    <header className="flex">
      <Link href="/">
        <h1 className="text-xl text-primary">Flickify</h1>
      </Link>
      <SearchPanel />
    </header>
  );
};

export default Header;
