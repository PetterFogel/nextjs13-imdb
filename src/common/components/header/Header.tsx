import { FC } from "react";
import styles from "./styles/Header.module.css";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Link href={"/"} as={``}>
        <h2 className={styles.logo}>Moviebox</h2>
      </Link>
      <nav className={styles.nav}>
        <Link href={"/categories"} as={`/categories`}>
          <li className={styles.link}>Categories</li>
        </Link>
        <Link href={"/favorites"}>
          <li className={styles.link}>Favorites</li>
        </Link>
        <Link href={"/search"}>
          <li className={styles.link}>Search</li>
        </Link>
      </nav>
    </header>
  );
};
