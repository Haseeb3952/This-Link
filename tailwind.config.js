/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        customColor: "#06C328",
        featuresText: "#0000000A",
      },
      fontFamily: {
        fontExo: ['"Exo"', "sans-serif"],
        fontInter: ['"Inter"', "sans-serif"],
      },
      backgroundColor: {
        customBackground: "#06C328",
        buttonBackground: "#0BA126",
        featuresBackground: "#F1F5EF",
        featuresDarkBg: "#095763",
        featuresLightBg: "#D5E5D2",
        testimonialBackground: "#F2F2F2",
        inputBackground: "#F5F5F5",
        contactBackground: "#D5E5D2",
      },
      boxShadow: {
        customShadow: "0px 9px 46px 0px #00000030",
      },
    },
  },
  plugins: [],
};
