import { Box, Checkbox, Grid, Tooltip, Typography } from "@mui/material";
import React from "react";
import MobilePayIcon from "../MobilePayIcon";

export default function PayResume() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start">
      <Grid item marginLeft={2}>
        <Typography fontWeight={"bold"} variant="h6">
          Betaling
        </Typography>
      </Grid>
      <Grid
        container
        marginX={2}
        marginY={1}
        padding={1}
        direction={"row"}
        justifyContent={"space-between"}
        borderRadius={4}
        sx={{ backgroundColor: "#ffb366" }}>
        <Grid item>
          <Grid item display={"flex"}>
            <Box>
              <Tooltip title="Eneste mulighed for nu" placement="top">
                <Checkbox checked color="success" />
              </Tooltip>
            </Box>
            <Box marginTop={1}>
              <Typography>MobilePay</Typography>
              <Typography variant="caption" display="block">
                Hurtig, sikker og nemt.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid item>
          <MobilePayIcon />
        </Grid>
      </Grid>
    </Grid>
  );
}
