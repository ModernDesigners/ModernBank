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
      mainText: "rgba(0, 0, 0, 0.80)",
      mainWhite: "rgba(255, 255, 255, 0.90)",
      subText: "rgba(0, 0, 0, 0.50)",
      subWhite: "rgba(255, 255, 255, 0.80)",
      iconBg: "rgba(217, 217, 217, 0.25)",
      iconBgHover: "rgba(217, 217, 217, 0.50)",
      line: "rgba(51, 51, 51, 0.30)",
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
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1424px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "991px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      borderRadius: {
        "5xl": "50px",
      },
    },
  },
  plugins: [],
};
