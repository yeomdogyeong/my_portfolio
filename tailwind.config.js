/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        intelon: ["intelone-mono-font-family-regular"],
        bagel: ["Her-Leeoksun"],
      },
      animation: {
        slide: "slide 10s infinite linear",
        slide2: "slide 10s infinite linear reverse",
        spin: "spin 5s infinite linear",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
        slide2: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      light: "#4682a9",
      dark: "#635985",
    },
  },
  plugins: [],
};
