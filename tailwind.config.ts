import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#0B665C", dark: "#094f48", wash: "#e6f2f1" },
        ink: { DEFAULT: "#15171f", 2: "#4c5261", 3: "#6c7385" },
        line: { DEFAULT: "#dee1e8" },
        wash: { DEFAULT: "#f3f4f7" },
      },
      fontFamily: {
        sans: ["var(--font-gothic)", "Malgun Gothic", "Apple SD Gothic Neo", "sans-serif"],
        myeongjo: ["var(--font-myeongjo)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
