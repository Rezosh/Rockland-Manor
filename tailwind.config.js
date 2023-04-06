/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        links: ["Sacramento", "cursive"],
      },

      colors: {
        "body-text": "#636363",
        "dark-brown": {
          50: "#f9f7f5",
          100: "#f3f0eb",
          200: "#e5e0d7",
          300: "#d7d0c3",
          400: "#bdae9b",
          500: "#9b8c73",
          600: "#8a7b63",
          700: "#6a5745",
          800: "#594635",
          
          900: "#484036"
        },
        "cream": "#F1E9DE"
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
