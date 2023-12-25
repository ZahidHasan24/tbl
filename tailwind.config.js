/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      clash: ["ClashDisplay-Regular"],
      "clash-medium": ["ClashDisplay-Medium"],
      jakarta: ["Plus Jakarta Sans"],
      inter: ["Inter"],
    },
    screens: {
      sm: { min: "480px", max: "767px" },

      md: { min: "768px", max: "1023px" },

      lg: { min: "1024px", max: "1279px" },

      xl: { min: "1280px" },
    },
    extend: {
      colors: {
        primary: "#635BFF",
        secondary: "#01002F",
        dark: "#111928",
        darkLight: "#292D34CC",
        gray: "#686885",
        "gray-200": "#EAECF0",
        "gray-300": "#D0D5DD",
        body: "#01002F",
        "body-second": "#F0F2FF",
        teal: "#00EAC3",
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
