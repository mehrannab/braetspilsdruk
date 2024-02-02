"use client";

import { Grid } from "@mui/material";
import { AddToCartButton } from "./components/AddToCartButton";
import { BoardGame } from "./components/BoardGame";
import { CustomGuideText } from "./components/CustomGuideText";
import { TableWithQuestion } from "./components/TableWithQuestion";

export function CustomContent() {
  return (
    <Grid
      container
      direction="row"
      marginTop={10}
      marginBottom={10}
      spacing={1}>
      <Grid item xs={6}>
        <CustomGuideText />
        <AddToCartButton />
      </Grid>
      <Grid item xs={6}>
        <BoardGame />
      </Grid>
      <Grid
        container
        direction={"column"}
        alignItems="center"
        justifyContent="center">
        <Grid item xs={12}>
          <TableWithQuestion />
        </Grid>
      </Grid>
    </Grid>
  );
}
