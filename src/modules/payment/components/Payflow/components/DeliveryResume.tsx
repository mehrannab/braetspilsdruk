import React, { useEffect, useState } from "react";
import { IFormInputShipping } from "../../Checkout/Checkout";
import { Box, Checkbox, Grid, Typography } from "@mui/material";

export default function DeliveryResume() {
  const [formData, setFormData] = useState<IFormInputShipping>();

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem("formData") || "");
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start">
      <Grid item marginLeft={2}>
        <Typography fontWeight={"bold"} variant="h6">
          Levering
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
              <Checkbox checked color="success" />
            </Box>
            <Box marginTop={1}>
              <Typography>DAO - Hjemmelevering</Typography>
            </Box>
          </Grid>
          <Grid item marginLeft={5}>
            <Typography variant="caption" display="block">
              Varen bliver leveret i hverdagene mellem kl. 8 og 17.
            </Typography>
            <Typography variant="caption" display="block">
              Leveringstiden vil typisk vare mellem 3 til 5 hverdage.
            </Typography>
          </Grid>
        </Grid>
        <Grid item marginTop={1}>
          <Typography>DKK 40.00</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
