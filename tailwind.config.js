/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/header-image.png')",
        "money-wallpaper":
          "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./assets/images/money-wallpaper.jpg')",
      },
      screens: {
        small: "425px",
        tablet: "768px",
        laptop: "1024px"
      },
    },
  },
  plugins: [],
};
