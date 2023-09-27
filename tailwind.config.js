/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainPurple: "#9E00FF",
      mainBlue: "#0056FD",
      bg: "#F5F5F5",
      mainText: "rgba(0, 0, 0, 0.80)",
      mainWhite: "rgba(255, 255, 255, 0.90)",
      subText: "rgba(0, 0, 0, 0.50)",
      subWhite: "rgba(255, 255, 255, 0.80)",
      line: "rgba(51, 51, 51, 0.30)",
      warning: "rgba(203, 0, 24, 0.80)",
      success: "rgba(0, 203, 45, 0.80)",
    },
    fontFamily: {
      pmedium: ["pmedium"],
      kmedium: ["kmedium"],
    },
    extend: {},
  },
  plugins: [],
};
