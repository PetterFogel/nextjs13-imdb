import type { AppProps } from "next/app";
import { Header } from "../components/common/components/header/Header";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
