import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f3ce13",
        black: "#040401",
        white: "#fcfcfc",
        grayDark: "#16191e"
      }
    }
  },
  plugins: []
};
export default config;
