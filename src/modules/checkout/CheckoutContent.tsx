import CartContext from "@/contexts/CartContext";
import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { CheckoutList } from "./components/CheckoutList/CheckoutList";

export function CheckoutContent() {
  const { ordres } = useContext(CartContext);

  return (
    <Grid container>
      <CheckoutList />
    </Grid>
  );
}
