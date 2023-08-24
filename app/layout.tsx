import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flickify",
  description: "This website is a competitor to imdb"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="m-auto max-w-7xl p-4 lg:px-6">{children}</main>
      </body>
    </html>
  );
}
