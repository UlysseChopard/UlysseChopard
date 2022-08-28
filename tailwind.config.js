/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/views/**/*.pug"],
  theme: {
    extend: {
      colors: {
        primary: "#3F7FBF",
        secondary: "#07427C",
      },
    },
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("children", "& > *");
      addVariant("children-hover", "& > *:hover");
    },
  ],
  separator: "_",
};
