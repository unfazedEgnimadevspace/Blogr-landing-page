/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Overpass: ["Overpass", "san-serif"],
        Ubuntu: ["Ubuntu", "san-serif"],
      },
      backgroundImage: {
        CirclePatterns:
          "url(/blogr-landing-page/src/images/bg-pattern-circles.svg)",
      },
    },
  },
  plugins: [],
};
