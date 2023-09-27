/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      mainPurple: "#9E00FF",
      mainBlue: "#0056FD",
      bg: "#f5f5f5",
      mainText: "rgba(0, 0, 0, 0.80)",
      mainWhite: "rgba(255, 255, 255, 0.90)",
      subText: "rgba(0, 0, 0, 0.50)",
      subWhite: "rgba(255, 255, 255, 0.80)",
      line: "rgba(51, 51, 51, 0.30)",
      warning: "rgba(203, 0, 24, 0.80)",
      success: "rgba(0, 203, 45, 0.80)",
      linear:
        "linear-gradient(282.83deg, #9E00FF 0.37%, #AD00FF 0.38%, #0056FD 100%)",
    },
    fontFamily: {
      pmedium: ["pmedium"],
      kmedium: ["kmedium"],
    },
    extend: {},
  },
  plugins: [],
};
