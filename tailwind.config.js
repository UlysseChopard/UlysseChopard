/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/views/**/*.pug"],
  theme: {
    extend: {},
  },
  plugins: [
    ({ addVariant }) => {
      addVariant("children", "& > *");
      addVariant("children-hover", "& > *:hover");
    },
  ],
  separator: "_",
};
