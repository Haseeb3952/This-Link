/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  content: [
    "./index.html",
    "./pages/dashboard.html",
    "./pages/contractors.html",
    "./pages/equipments.html",
    "./pages/staff.html",
    "./pages/staff-creation.html",
    "./pages/job-creation.html",
    "./pages/required-resources.html",
    "./pages/job-application-form.html",
    "./pages/professional-details.html",
  ],
  theme: {
    extend: {
      colors: {
        customColor: "#06C328",
        featuresText: "#0000000A",
        lightBlue: "#6B86BB",
        darkGreen: "#245553",
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
        footerBackground: "#D5E5D2",
        sociaMediaBackground: "#07444E",
        navAndTabsBackground: "FFDD38",
        btnAddJob: "#3B7471",
        btnBgDarkGreen: "#3B7471",
        btnBgOrange: "#FF8E00",
        btnBgJellyFish: "#4ECFCA",
        btnBgPurple: "#BC5DC6",
        btnBgLightGreen: "#59AC4B",
      },
      boxShadow: {
        customShadow: "0px 9px 46px 0px #00000030",
      },
      borderColor: {
        staffBtnBorder: "#3B7471",
      },
    },
  },
  plugins: [],
};
