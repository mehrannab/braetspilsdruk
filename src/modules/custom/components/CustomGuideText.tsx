import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export function CustomGuideText() {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}>
      <Grid item>
        <Typography variant="h4">Design dit eget drukspil!</Typography>
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          Du designer dit eget drukspil ved at skrive en regel eller et
          spørgsmål som tilhører et nummerede felt.
          <br /> Når du har gjort dette indtil der er udfyldt 44 felter, kan du
          tilføje dit drukspil til indkøbskurven.
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
          Nedenfor ses skabelonen til at oprette dine egne regler og spørgsmål.{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}
