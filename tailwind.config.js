/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#2dd4bf",
          secondary: "#78716c",
          accent: "#3b82f6",
          neutral: "#291334",
          "base-100": "#f3f4f6",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#dc2626",
        },
      },
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
