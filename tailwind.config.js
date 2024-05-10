/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#140d0d",
        secondary: "#150B2B99",
        tertiary: "#878787",
        "p-color": "#FFFFFF",
        blue: "#030f2b",
        red: "#bb2e2e",
        orange: "#ec7210",
        color1: "#a1c4fd",
        color2: "#c2e9fb",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};