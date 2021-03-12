module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: {
        light: "#EFFBFB",
        DEFAULT: "#1D7E7A",
        dark: "#009eeb"
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc"
      }
    },
    fontSize: {
      sm: ["16px", "24px"],
      base: ["18px", "36px"],
      lg: ["28px", "28px"],
      xl: ["36px", "32px"],
      "2xl": ["48px", "32px"],
      "3xl": ["56px", "32px"]
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700
    },
    spacing: {
      px: "1px",
      0: "0",
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56",
      8: "64"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: ["gatsby-plugin-postcss"]
};
