/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        mxs: { max: "375px" },
        xs: { min: "376px" },
        mobile: { max: "639px" },
        tablet: { max: "767px" },
      },
      colors: {
        brandPrimary: "#3A67B1",
      },
      width: {
        149: "149px",
      },
      height: {
        149: "149px",
      },
      maxHeight: {
        "3/4": "75%",
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        sfProText: ["SF Pro Text", "sans-serif"],
      },
      fontSize: {
        "2xs": ".625rem",
        "3xs": ".5rem",
        "4xs": ".325rem",
        "5xs": ".25rem",
        dsxl: "34px",
      },
      boxShadow: {
        dsL: "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
      },
      animation: {
        "spin-fast": "spin 0.5s linear infinite",
        "spin-slow": "spin 3s linear infinite",
        flash: "flash 2s infinite",
      },
    },
  },
  plugins: [],
  safelist: ["bg-brandPrimary", "text-brandPrimary"],
  mode: "jit",
};
