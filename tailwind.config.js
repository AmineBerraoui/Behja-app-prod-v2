/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'frutiger': ['Frutiger', 'sans-serif'], // Add your font family
      },
      colors: {
        neutral: {
          50: "#FAFAFA",
          100: "#F4F4F4",
          200: "#E4E4E3",
          300: "#D4D3D3",
          400: "#C4C3C3",
          500: "#939291",
          600: "#6F6E6C",
          700: "#4A4948",
          800: "#252524",
          900: "#121212",
        },
        primary: {
          50: "#FCFAF9",
          100: "#F8F4F3",
          200: "#EEE4E2",
          300: "#E3D4D1",
          400: "#D9C4C0",
          500: "#BA938C",
          600: "#99655C",
          700: "#66433D",
          800: "#33221F",
          900: "#19110F",
        },
        error: {
          50: "#FEF6F6",
          100: "#FDECEC",
          200: "#FBD0D0",
          300: "#F9B4B4",
          400: "#F69898",
          500: "#EF4444",
          600: "#D41212",
          700: "#8D0C0C",
          800: "#470606",
          900: "#230303",
        },
        shades: {
          black: "#000000",
          white: "#FFFFFF",
        },
      }
    },
  },
  plugins: [],
};
