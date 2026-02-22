import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      colors: {
        cream: "#fdf8f6",
        "rose-deep": "#8b2942",
        rose: "#b76e79",
        "rose-light": "#e8b4bc",
        "rose-pale": "#f9eef0",
        leaf: "#5a7d5e",
        stone: "#5c5346",
        warm: "#c4a77d",
      },
    },
  },
  plugins: [],
};
export default config;
