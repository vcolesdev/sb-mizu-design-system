import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // @link https://stackoverflow.com/questions/71641943/tailwind-3-0-23-classes-not-being-applied-in-real-time-in-storybook
  safelist: [
    {
      pattern: /^(.*?)/,
    },
  ],
  theme: {
    fontWeight: {
      base: 300,
      normal: 300,
      medium: 400,
      semibold: 500,
      bold: 700,
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        primary: colors.violet,
        secondary: colors.slate,
        brand: colors.violet,
        success: colors.emerald,
        info: colors.blue,
        warning: colors.amber,
        danger: colors.rose,
      },
    },
  },
  plugins: [],
};
