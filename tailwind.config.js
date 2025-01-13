/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-black",
    "bg-white",
    "bg-transparent",
    "text-black",
    "text-white",
    "text-transparent",
    "hover:bg-black",
    "hover:bg-white",
    "hover:bg-transparent",
    "hover:text-black",
    "hover:text-white",
    {
      pattern: /(bg|text|hover:bg|hover:text)-(black|white|transparent)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        bai: ["Bai Jamjuree", "sans-serif"],
      },
    },
  },
  plugins: [],
};
