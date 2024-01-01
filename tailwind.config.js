/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/header-image.png')",
        "hero-pattern-blog":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/blog-header.jpg')",
        "hero-pattern-about":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/about-header.jpg')",
        "hero-pattern-contact":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/contact-header.jpg')",
        "hero-pattern-services":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/services-header.jpg')",
        "money-wallpaper":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./assets/images/money-wallpaper.jpg')",
      },
      screens: {
        small: "425px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1920px",
      },
    },
  },
  plugins: [],
};
