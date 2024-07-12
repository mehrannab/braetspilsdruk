import { createTheme } from "@mui/material";
import { Josefin_Sans } from "next/font/google";

const josefin_Sans = Josefin_Sans({
  weight: ["300", "400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9F70FD",
    },
    secondary: {
      main: "#FF8911",
    },
    background: {
      default: "#7F27FF",
    },
  },
  typography: {
    fontFamily: josefin_Sans.style.fontFamily,
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#FF8911",
          minHeight: 200,
          minWidth: 200,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "black",
          "& label.Mui-focused": {
            color: "black",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: "black",
            fontSize: "0.85rem",
            fontWeight: "bold",
          },
        },
      },
    },
  },
});

// Optionally, use @import here
// components: {
//   MuiCssBaseline: {
//     styleOverrides: `
//     @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap')
//     `,
//   },
// },
