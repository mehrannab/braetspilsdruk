import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IFormInputShipping } from "../../Checkout/Checkout";
import { useFormContext, useWatch } from "react-hook-form";

export default function InfoResume() {
  const [formData, setFormData] = useState<IFormInputShipping>();

  useEffect(() => {
    const storedData = JSON.parse(sessionStorage.getItem("formData") || "");
    console.log("Inde i information");
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}>
      <Grid item marginLeft={2}>
        <Typography fontWeight={"bold"} variant="h6">
          Mine informationer
        </Typography>
      </Grid>
      <Grid
        container
        marginX={2}
        marginY={1}
        padding={1}
        direction={"column"}
        borderRadius={4}
        sx={{ backgroundColor: "#ffb366" }}>
        <Grid item marginLeft={2}>
          <Typography>
            {formData?.firstName} {formData?.lastName}
          </Typography>
        </Grid>
        <Grid item marginLeft={2}>
          <Typography>{formData?.email}</Typography>
        </Grid>
        <Grid item marginLeft={2}>
          <Typography>+45{formData?.phoneNumber}</Typography>
        </Grid>
        <Grid item marginLeft={2} marginTop={1}>
          <Typography>{formData?.address}</Typography>
        </Grid>
        <Grid item marginLeft={2}>
          <Typography>
            {formData?.postalCode} {formData?.city}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ marginLeft: "auto", marginTop: "auto", marginRight: 2 }}>
          <Button variant="contained">Redigere</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
