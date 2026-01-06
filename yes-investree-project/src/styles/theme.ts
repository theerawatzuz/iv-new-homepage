import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    phablet: true;
    tablet: true;
    laptop: true;
    desktop: true;
    monitor: true;
  }
}

export const mainTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      phablet: 481,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
      monitor: 1440,
    },
  },
  typography: {
    fontFamily: "NotoSansThai",
  },
  palette: {
    primary: {
      main: "#009FDF",
    },
    secondary: {
      main: "#000A1B",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "white",
          borderRadius: "12px !important",
          height: "52px",
          padding: "0",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #009FDF",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#009FDF",
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D60B0B", // กำหนดสี border เมื่อ error
          },
          "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: "#D60B0B", // กำหนดสี border เมื่อ error
          },
          "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #D60B0B",
          },
        },
      },
    },
  },
});
