/** @type {import('tailwindcss').Config} */

const DESIGN_TOKENS = {
  "gami-primary": "#7f9cf5",
  "gami-secondary": "#8082f7",
  "gami-third": "#54BAB9",
  "gami-fourth": "#FF8882",

  "gami-indigo": "#4338ca",
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      accentColor: DESIGN_TOKENS,
      backgroundColor: DESIGN_TOKENS,
      textColor: DESIGN_TOKENS,
      borderColor: DESIGN_TOKENS,
    },
  },
  plugins: [],
};
