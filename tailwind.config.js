const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Epilogue",
      cursive: "Dancing Script",
    },
    extend: {
      dropShadow: {
        dp: "0 0 40mm yellow",
      },
    },
  },
  variants: {
    extend: {
      grayscale: ["hover"],
      scale: ["hover", "active"],
      dropShadow: ["hover"],
    },
  },
  plugins: [],
};
