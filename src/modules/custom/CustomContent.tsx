import { Grid } from "@mui/material";
import { AddToCartButton } from "./components/AddToCartButton";
import { BoardGame } from "./components/BoardGame";
import { CustomGuideText } from "./components/CustomGuideText";
import { QuestionTableEdit } from "./components/QuestionTableEdit";

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
      <Grid item xs={12}>
        <QuestionTableEdit />
      </Grid>
    </Grid>
  );
}
