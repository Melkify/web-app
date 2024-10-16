/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      iranyekan: ["iranyekan", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    require("daisyui"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/aspect-ratio"),
  ],
  daisyui: {
    themes: ["light"],
  },
}