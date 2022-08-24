module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: "#ffa500",
        deepblue: "#32529B",
        skyblue: "#52a8f2",
        brand: {
          light: "#3fbaeb",
          DEFAULT: "#0fa9e6",
          dark: "#0c87b8",
        },
      },
      fontFamily: {
        adefam: "'adefam', 'Roboto', Arial, sans-serif",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      cursor: ["active"],
    },
  },
  plugins: [],
};
