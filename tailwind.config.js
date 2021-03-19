module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: {
        light: '#EFFBFB',
        DEFAULT: '#1D7E7A',
        dark: '#009eeb',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
      white: '#ffffff',
    },
    fontSize: {
      sm: ['14px', '1.5'],
      base: ['18px', '1.6'],
      lg: ['24px', '1.5'],
      xl: ['28px', '1.5'],
      '2xl': ['36px', '1.4'],
      '3xl': ['56px', '1.4'],
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
      bold: 700,
    },
    spacing: {
      px: '1px',
      0: '0',
      1: '8px',
      2: '16px',
      3: '24px',
      4: '32px',
      5: '40px',
      6: '48px',
      7: '56px',
      8: '64px',
      9: '72px',
      10: '100px',
      15: '150px',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: ['gatsby-plugin-postcss'],
};
