import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function InfoContent() {
  return (
    <Grid container justifyContent={"center"}>
      <Grid item>
        <Typography fontWeight={"bold"} fontSize={"36px"}>
          Om braetspilsdruk
        </Typography>
      </Grid>
      <Grid item>
        <Typography>
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
        </Typography>
      </Grid>
      <Grid item marginTop={6}>
        <Typography fontWeight={"bold"} fontSize={"22px"}>
          Handelsbetingelser og vilkår
        </Typography>
      </Grid>
      <Grid>
        <Typography>
          <Box component={"span"} fontWeight={"bold"}>
            Generelt:
          </Box>{" "}
          Disse vilkår gælder for køb af brætspilsdruk designet via vores
          hjemmeside. Ved at benytte vores tjeneste accepterer du disse vilkår.
        </Typography>
        <Typography>
          <Box component={"span"} fontWeight={"bold"}>
            Design og indhold:
          </Box>{" "}
          Brugeren er selv ansvarlig for det indhold, der tilføjes til
          brætspillet. Indholdet må ikke krænke tredjepartsrettigheder eller
          indeholde ulovligt materiale.
        </Typography>
        <Typography>
          <Box component={"span"} fontWeight={"bold"}>
            Betaling:
          </Box>{" "}
          Betaling for brætspillet sker online via sikre betalingsmetoder.
          Prisen fastsættes ud fra de valgte tilpasninger og størrelsen af
          brætspillet.
        </Typography>
        <Typography>
          <Box component={"span"} fontWeight={"bold"}>
            Levering:
          </Box>{" "}
          Brætspillet leveres som en digital fil eller fysisk produkt afhængig
          af valg. Leveringstiden kan variere baseret på designprocessen og
          leveringsmetode.
        </Typography>
        <Typography>
          <Box component={"span"} fontWeight={"bold"}>
            Fortrydelsesret:
          </Box>{" "}
          Der er ingen fortrydelsesret for tilpassede brætspil, da disse er
          specialfremstillede.
        </Typography>
        <Typography></Typography>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}
