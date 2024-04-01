import { Box, Fade, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import InfoCard from "@/components/infoCard/InfoCard";

export default function InfoContent() {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginBottom={6}>
        <Grid item>
          <Image src="/hello.svg" height={100} width={100} alt={""} />
        </Grid>
        <Grid item>
          <Typography fontWeight={"bold"} fontSize={"36px"}>
            Om braetspilsdruk
          </Typography>
        </Grid>
        <Grid item mx={22}>
          Forestil dig et spil, der ikke bare er et spil, men en rejse gennem
          dine egne ideer, humor og kreativitet. På vores hjemmeside kan du nu
          omdanne denne drøm til virkelighed ved at designe dit eget
          brætspilsdruk. I hjertet af dette unikke spil ligger muligheden for at
          tilføje dine personlige spørgsmål og regler på hvert felt. Hver gang
          du slår terningen og rykker din brik, åbner du døren til en verden
          skabt af dig selv og dine venner. Det kan være et spørgsmål, der
          udfordrer venskaber, en sjov opgave, der bringer latter, eller en
          uventet regel, der vender spillet på hovedet. Dit brætspilsdruk bliver
          mere end blot et spil; det bliver en samling af jeres indbyrdes
          historier, indre jokes og uforglemmelige øjeblikke. Del glæden,
          spændingen og overraskelserne, mens I bevæger jer gennem spillet,
          skabt af jer og for jer. Så tag terningen i hånden og lad eventyret
          begynde – et eventyr, hvor hver runde er en ny side i jeres fælles
          historiebog.
        </Grid>
      </Grid>

      <Grid container direction="row" alignItems="flex-start" marginBottom={10}>
        <Grid container item justifyContent="space-evenly">
          <InfoCard cardTitle={"Generelt"} text={"dede"} timeout={1000} />
          <Box marginTop={10}>
            <Fade in={true} timeout={1000}>
              <Image src="/info/rules.svg" height={300} width={300} alt={""} />
            </Fade>
          </Box>
        </Grid>
        <Grid container item justifyContent="space-evenly">
          <Box marginTop={10}>
            <Fade in={true} timeout={2000}>
              <Image
                src="/info/handshake.svg"
                height={300}
                width={300}
                alt={""}
              />
            </Fade>
          </Box>

          <InfoCard cardTitle={"Handelsbetingelser og vilkår"} timeout={2000} />
        </Grid>

        <Grid container item justifyContent="space-evenly">
          <InfoCard cardTitle={"Design og indhold"} timeout={3000} />
          <Box marginTop={10}>
            <Fade in={true} timeout={3000}>
              <Image src="/info/ux.svg" height={300} width={300} alt={""} />
            </Fade>
          </Box>
        </Grid>
        <Grid container item justifyContent="space-evenly">
          <Box marginTop={10}>
            <Fade in={true} timeout={4000}>
              <Image src="/info/wallet.svg" height={300} width={300} alt={""} />
            </Fade>
          </Box>
          <InfoCard cardTitle="Betaling" timeout={4000} />
        </Grid>
        <Grid container item justifyContent="space-evenly">
          <InfoCard cardTitle="Levering" timeout={5000} />
          <Box marginTop={10}>
            <Fade in={true} timeout={5000}>
              <Image
                src="/info/fast-delivery.svg"
                height={300}
                width={300}
                alt={""}
              />
            </Fade>
          </Box>
        </Grid>
        <Grid container item justifyContent="space-evenly">
          <Box marginTop={10}>
            <Fade in={true} timeout={4000}>
              <Image
                src="/info/withdrawal.svg"
                height={300}
                width={300}
                alt={""}
              />
            </Fade>
          </Box>
          <InfoCard cardTitle="Fortrydelsesret" timeout={6000} />
        </Grid>
      </Grid>
    </>
  );
}
