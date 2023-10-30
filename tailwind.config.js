/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myGray: "#1d1f23",
        myYellow: "#f7a100",
      },
      boxShadow: {
        custom: "0px 0px 7px black",
      },
    },
  },
  plugins: [],
};
