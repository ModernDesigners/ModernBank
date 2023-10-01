/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      mainPurple: "#9E00FF",
      mainPurpleFade: "#AD00FF",
      mainBlue: "#0056FD",
      bg: "#f5f5f5",
      gray: "#a3a3a3",
      black: "#000000",
      mainText: "rgba(0, 0, 0, 0.80)",
      mainWhite: "rgba(255, 255, 255, 0.90)",
      mainBlack: "rgba(0, 0, 0, 0.90)",
      subText: "rgba(0, 0, 0, 0.50)",
      subWhite: "rgba(255, 255, 255, 0.80)",
      subBlack: "rgba(0, 0, 0, 0.60)",
      subBlack2: "rgba(0, 0, 0, 0.70)",
      paragraph: "rgba(0, 0, 0, 0.50)",
      iconBg: "rgba(217, 217, 217, 0.25)",
      iconBgHover: "rgba(217, 217, 217, 0.50)",
      iconBgHover2: "rgb(240, 240, 240)",
      line: "rgba(51, 51, 51, 0.05)",
      warning: "rgba(203, 0, 24, 0.80)",
      success: "rgba(0, 203, 45, 0.80)",
      linear:
        "linear-gradient(282.83deg, #9E00FF 0.37%, #AD00FF 0.38%, #0056FD 100%)",
      inputStart: "rgba(255, 255, 255, 0.15)",
      inputEnd: "rgba(255, 255, 255, 0.05)",
      cardLinear:
        "linear-gradient(283deg, #9E00FF 0.37%, #AD00FF 0.38%, #0056FD 100%)",
    },
    boxShadow: {
      cardShadow: " 0px 0px 50px rgba(97, 0, 255, 0.50)",
      logoShadow: "0px 10px 0px rgba(255, 255, 255, 0.25)",
      glowShadow: "0px 0px 30px rgba(255, 255, 255, 0.30)",
    },
    fontFamily: {
      pmedium: ["pmedium"],
      pbold: ["pbold"],
      kmedium: ["kmedium"],
    },
    screens: {
      "2xl": { max: "1750px" },
      xl: { max: "1440px" },
      xls: { max: "1279px" },
      lg: { max: "991px" },
      md: { max: "767px" },
      sm: { max: "590px" },
      mobile: { max: "450px" },
    },

    extend: {
      borderRadius: {
        "5xl": "50px",
      },
      fontSize: {
        sm2: "12px",
      },
      animation: {
        fly: "fly 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
