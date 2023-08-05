import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";

const SquareContainer = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "40%",
  height: "25%",
  boxSizing: "border-box",
  border: `3px solid`,
});

export function AddToCartButton() {
  return (
    <SquareContainer>
      <Typography variant="h5">Pris 99 kr</Typography>
      <Button variant="contained" color="primary">
        Tilføj til kurven
      </Button>
    </SquareContainer>
  );
}
