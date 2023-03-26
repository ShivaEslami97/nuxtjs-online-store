/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        nav: "rgb(0 6 16 / 41%)",
        navDrk: "rgb(1 4 10 / 93%)",
        primary: "#ce9a70",
        primaryRgb: "rgb(181 116 64 / 70%)",
        gray: "#797878",
        grayLtr: "#e7e7e7",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        card: "repeat(auto-fit, minmax(250px, 1fr))",
        detail: "repeat(auto-fit, minmax(33.5rem, 1fr))",
        twoCol: "100px 200px",
      },
    },
  },
  plugins: [],
};
