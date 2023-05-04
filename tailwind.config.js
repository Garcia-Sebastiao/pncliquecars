/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        poppinsLight: "poppinsLight",
        poppins: "poppins",
        poppinsMedium: "poppinsMedium",
        poppinsSemiBold: "poppinsSemiBold",
        poppinsBold: "poppinsBold",
      },
      colors: {
        mainColor: "#FB8C00",
        textColor: "#444444",
        footerBlack: "#333333",
        mainHover: "#d67804",
      },
      width: {
        520: "520px",
        444: "444px",
        625: "625px",
      },
      height: {
        463: "463px",
      },
      maxWidth: {
        72: "288px",
      },
      borderRadius: {
        20: "20px",
      },
      borderWidth: {
        1: "1px",
      },
      screens: {
        oldMobile: { raw: "(max-width: 360px)" },
        mobile: { raw: "(max-width: 520px)" },
        tablet: { raw: "(max-width: 820px)" },
      },
    },
  },
  plugins: [],
};
