/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111a16",
        inksoft: "#52635a",
        paper: "#f6f8f5",
        blush: {
          50: "#f1f8f3",
          100: "#e4f1e7",
          200: "#c9e3d0",
          300: "#a5d0b2",
          400: "#74b98a",
          500: "#3f9a62",
          600: "#247a49",
          700: "#185d38",
        },
      },
      fontFamily: {
        sans: ["Kalam", "cursive"],
        display: ["Caveat", "cursive"],
      },
      boxShadow: {
        sketch: "4px 4px 0 #a5d0b2",
        sketchlg: "6px 6px 0 #a5d0b2",
      },
    },
  },
  plugins: [],
}
