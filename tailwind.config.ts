import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Paleta neutra e acolhedora, sem “cara de campanha”.
        ink: "#0f172a",
        mist: "#f8fafc",
        sand: "#f1f5f9",
        leaf: "#14532d"
      }
    }
  },
  plugins: []
};

export default config;


