/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        customColor: "#06C328",
      },
      fontFamily: {
        fontExo: ['"Exo"', "sans-serif"],
        fontInter: ['"Inter"', "sans-serif"],
      },
      backgroundColor: {
        customBackground: "#06C328",
        buttonBackground: "#0BA126",
      },
    },
  },
  plugins: [],
};
