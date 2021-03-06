export const breakpointsRule = {
  xs: 600,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1536
};

const breakpoints = ["600px", "768px", "1024px", "1280px", "1536px"];

// aliases
breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];

const theme = {
  name: "light",
  typography: {
    fontFamily: '"Kalpurush", sans-serif',
    fontSize: "20px",
    lineHeight: 1.65,
    fontWeight: "400",
    h1: {
      fontSize: "2.488rem",
      lineHeight: 1.65,
      fontWeight: 700
    },
    h2: {
      fontSize: "2.074rem",
      lineHeight: 1.65,
      fontWeight: 700
    },
    h3: {
      fontSize: "1.728rem",
      lineHeight: 1.65,
      fontWeight: 700
    },
    h4: {
      fontSize: "1.44rem",
      lineHeight: 1.65,
      fontWeight: 700
    },
    h5: {
      fontSize: "1.2rem",
      lineHeight: 1.65,
      fontWeight: 700
    },
    h6: {
      fontSize: "1rem",
      lineHeight: 1.65,
      fontWeight: 700
    },
    body: {
      fontSize: "1rem",
      lineHeight: 1.65,
      fontWeight: 400
    },
    caption: {
      fontSize: "0.833rem",
      lineHeight: 1.65,
      fontWeight: 400
    }
  },
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 100],
  breakpoints,
  colors: {
    primary3: "#7950F2",
    primary2: "#845EF7",
    primary1: "#9775FA",
    dark2: "#1c1826",
    dark1: "#272135",
    light2: "#f8f9fa",
    light1: "#E2E4E5",
    error: "#FA5252",
    success: "#51CF66",
    warning: "#FFD43B"
  }
};

export default theme;
