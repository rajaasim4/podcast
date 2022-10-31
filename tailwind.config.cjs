/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "426px" },
      xsm: { max: "377px" },
      // => @media (max-width: 639px) { ... }
    },
    // extend: { fontFamily: { mont: ['"Montserrat Alternates"', "sans-serif"] } },
  },
  plugins: [],
};
