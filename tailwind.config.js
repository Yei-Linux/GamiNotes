/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        "gami-primary": "#7f9cf5",
        "gami-secondary": "#9879e9",
        "gami-third": "#54BAB9",
        "gami-fourth": "#FF8882",

        "gami-indigo": "#4338ca",
      },
      textColor: {
        "gami-primary": "#7f9cf5",
        "gami-secondary": "#9879e9",
        "gami-third": "#54BAB9",
        "gami-fourth": "#FF8882",

        "gami-indigo": "#4338ca",
      },
      borderColor: {
        "gami-primary": "#7f9cf5",
        "gami-secondary": "#9879e9",
        "gami-third": "#54BAB9",
        "gami-fourth": "#FF8882",

        "gami-indigo": "#4338ca",
      },
    },
  },
  plugins: [],
};
