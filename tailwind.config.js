/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        dgray: "#6C6C6C",
        praymary: "#FEAF00",
      },
    },
  },
  plugins: [],
};
