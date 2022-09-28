import type { AppProps } from "next/app";
import { Header } from "../src/common/components/header/Header";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />;
      </main>
    </>
  );
};

export default MyApp;
