import { Box, Button, Divider, Grid, styled, useTheme } from "@mui/material";
import Image from "next/image";
import clinkingbeer from "../../images/clinkingbeer.gif";
import overskrift from "../../images/overskrift.png";
import step1 from "../../images/step1.png";
import step2 from "../../images/step2.png";
import step3 from "../../images/step3.png";
import React from "react";
import { useRouter } from "next/router";

const StyledOptionsButton = styled(Button)({
  fontWeight: "bold",
  color: "darkgreen",
});

export function HomeContent() {
  const theme = useTheme();
  const router = useRouter();

  const handleNavigationPremade = React.useCallback(() => {
    router.push({ pathname: "/premade" });
  }, [router]);

  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        spacing={theme.spacing(6)}
        marginTop={5}
      >
        <Grid item>
          <Grid container justifyContent={"center"} alignItems={"flex-end"}>
            <Grid item xs={12}>
              <Image src={overskrift} width={650} height={200} alt={"Title"} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent={"center"} alignItems={"center"}>
              <Grid item>
                <Image
                  src={clinkingbeer}
                  width={250}
                  height={250}
                  alt={"Skål"}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={4}>
            <Grid item>
              <StyledOptionsButton
                color="secondary"
                variant="contained"
                size="large"
              >
                Design dit eget drukspil
              </StyledOptionsButton>
            </Grid>
            <Grid item>
              <StyledOptionsButton
                color="secondary"
                variant="contained"
                size="large"
                onClick={handleNavigationPremade}
              >
                Køb et færdiglavet drukspil
              </StyledOptionsButton>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Image src={step1} width={375} height={375} alt={"Step1"} />
          <Image src={step2} width={375} height={375} alt={"Step2"} />
          <Image src={step3} width={375} height={375} alt={"Step3"} />
        </Grid>
      </Grid>
    </>
  );
}
