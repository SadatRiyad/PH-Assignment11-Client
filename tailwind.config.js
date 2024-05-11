/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#140d0d",
        secondary: "#150B2B99",
        tertiary: "#878787",
        "p-color": "#FFFFFF",
        orange: "#ec7210",
        blue: "#030f2b",
        red: "#bb2e2e",
        color1: "#a1c4fd",
        color2: "#c2e9fb",
        'custom-gray': '#f8f8f8',
        'custom-gray-dark': '#666',
        'custom-blue': '#007bff',
        'custom-blue-dark': '#0056b3',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
};