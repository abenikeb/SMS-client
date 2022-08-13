/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#65C3C8",
          secondary: "#EF9FBC",
          accent: "#EEAF3A",
          neutral: "#291334",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#dc2626",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
      "cupcake",
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: true,
    prefix: "",
    darkTheme: "cupcake",
  },
};
