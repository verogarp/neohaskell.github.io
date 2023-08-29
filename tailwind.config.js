/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        text: "#000000",
        background: "#E3DFF2",
        primary: "#7df9ff",
        secondary: "#9723c9",
        accent: "#fffF00",
        darkBg: "#444950",
      },
    },
  },
  plugins: [],
};
