import CartContext from "@/contexts/CartContext";
import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { CheckoutList } from "./components/checkoutList/CheckoutList";

export function CheckoutContent() {
  return (
    <Grid container>
      <CheckoutList />
    </Grid>
  );
}
