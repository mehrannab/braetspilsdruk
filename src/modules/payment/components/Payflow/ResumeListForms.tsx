import TopBar from "@/components/appbar/TopBar";
import { Grid, Typography } from "@mui/material";
import DeliveryResume from "./components/DeliveryResume";
import InfoResume from "./components/InfoResume";
import PayResume from "./components/PayResume";
import ButtonPay from "./components/ButtonPay";
import BasketResume from "./components/BasketResume";

export default function ResumeListForms() {
  return (
    <>
      <TopBar />
      <Grid
        container
        justifyContent="flex-start"
        alignItems="flex-start"
        direction={"column"}
        paddingY={6}
        borderRadius={8}
        marginTop={10}
        rowGap={2}
        marginBottom={10}
        sx={{ backgroundColor: "#FF8911", width: "60%", mx: "auto" }}>
        <Grid item sx={{ width: "100%" }}>
          <InfoResume />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <BasketResume />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <DeliveryResume />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <PayResume />
        </Grid>
        <Grid item sx={{ width: "100%" }}>
          <ButtonPay />
        </Grid>
      </Grid>
    </>
  );
}
