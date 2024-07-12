"use client";

import { Grid } from "@mui/material";
import { CustomGuideText } from "./components/CustomGuideText";
import TextfieldListQuestions from "./components/TextfieldListQuestions";

export function CustomContent() {
  return (
    <Grid
      container
      direction={"column"}
      marginTop={14}
      justifyContent={"center"}
      alignItems={"center"}>
      <Grid item>
        <CustomGuideText />
      </Grid>
      <Grid item marginTop={8}>
        <TextfieldListQuestions />
      </Grid>
    </Grid>
  );
}
