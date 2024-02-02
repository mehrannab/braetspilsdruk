import { createTheme } from "@mui/material";
import { brown, yellow } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6F3A",
    },
    secondary: {
      main: "#99CC66",
    },
    background: {
      default: "#deb887",
    },
  },
  typography: {
    fontFamily: "cursive",
    fontSize: 16,
  },
});
