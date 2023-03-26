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
        primaryDrk: "rgb(181 116 64)",
        gray: "#797878",
        grayLtr: "#e7e7e7",
        overlay: "rgb(0 0 0 / 33%)",
      },
      gridTemplateColumns: {
        // Complex site-specific column configuration
        card: "repeat(auto-fit, minmax(250px, 1fr))",
        detail: "repeat(auto-fit, minmax(33.5rem, 1fr))",
        twoCol: "100px 200px",
      },
      boxShadow: {
        modal: "0 0.5rem 1rem rgb(0 0 0 / 54%)",
      },
      borderRadius: {
        card: "60% 40% 30% 70%/60% 30% 70% 40%",
      },
    },
  },
  plugins: [],
};
