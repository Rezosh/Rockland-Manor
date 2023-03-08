/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#f9f7f4",
          100: "#f2efe9",
          200: "#e5ded2",
          300: "#d8cbbb",
          400: "#bfaa8f",
          500: "#a78863",
          600: "#9a7c58",
          700: "#7d5f43",
          800: "#60412f",
          900: "#4a321f",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
