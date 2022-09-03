/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3F7FBF",
        secondary: "#07427C",
        tertiary: "dimgray",
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("children", "& > *");
      addVariant("children-hover", "& > *:hover");
    },
    require("@tailwindcss/forms"),
  ],
  separator: "_",
};
