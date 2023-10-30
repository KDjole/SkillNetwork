/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myGray: "#1d1f23",
        myYellow: "#f7a100",
      },
      zIndex: {
        minus: "-1",
      },
      boxShadow: {
        custom: "0px 0px 7px black",
      },
    },
    customClasses: {
      myClip: "clip-path: ellipse(130px 140px at 10% 20%)",
    },
  },
  plugins: [],
};
