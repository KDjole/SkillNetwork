/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        myGray: "#1d1f23",
        myYellow: "#fccf03",
      },
      zIndex: {
        minus: "-1",
      },
      boxShadow: {
        custom: "0px 0px 7px black",
      },
      translate: {
        minus: "-25%",
      },
      scale: {
        250: "2.5",
      },
    },
    customClasses: {
      myClip: "clip-path: ellipse(130px 140px at 10% 20%)",
    },
  },
  plugins: [],
};
