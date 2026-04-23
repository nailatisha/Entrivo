import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#1B3A5C",
        sage: "#A8B89A",
        "warm-white": "#F8F9FA",
        "light-sage": "#EEF2EC",
        gold: "#C9A84C",
        charcoal: "#2D2D2D"
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
