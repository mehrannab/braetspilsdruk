import { createTheme } from "@mui/material";
import { brown, yellow } from "@mui/material/colors";

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
    fontFamily: ["Yellowtail", "cursive"].join(","),
  },

  // Optionally, use @import here
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: `
  //     @import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap')
  //     `,
  //   },
  // },
});
