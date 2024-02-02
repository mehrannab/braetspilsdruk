import { AppBar, Box, Grid, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import FooterListItem from "./FooterListItem";

export default function Footer() {
  return (
    <AppBar color="primary" position="absolute">
      <Toolbar sx={{ padding: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start">
          <Grid item>
            <Grid container direction={"column"}>
              <Grid item sx={{ marginBottom: 1 }}>
                <Typography
                  textTransform={"capitalize"}
                  color="black"
                  fontSize="20px"
                  fontWeight="bold">
                  shop
                </Typography>
              </Grid>
              <Grid item>
                <FooterListItem
                  name={"Design eget braetspil"}
                  route={"custom"}
                />
              </Grid>
              <Grid item>
                <FooterListItem
                  name="Køb færdiglavet braetspil"
                  route={"premade"}
                />
              </Grid>
              <Grid item>
                <FooterListItem name="Konceptet bag" route={"info"} />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  textTransform={"capitalize"}
                  color="black"
                  fontSize="20px"
                  fontWeight="bold"
                  sx={{ marginBottom: 1 }}>
                  information
                </Typography>
              </Grid>
              <Grid item>
                <FooterListItem name={"Om braetspilsdruk"} route={"/"} />
              </Grid>
              <Grid item>
                <FooterListItem name={"Handelsbetingelser"} route={"/"} />
              </Grid>
              <Grid item>
                <FooterListItem name={"Forsendelse og levering"} route={"/"} />
              </Grid>
              <Grid item>
                <FooterListItem
                  name={"Persondatapolitik og cookies"}
                  route={"/"}
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid container direction={"column"}>
              <Grid item>
                <Typography
                  textTransform={"capitalize"}
                  color="black"
                  fontSize="20px"
                  fontWeight="bold"
                  sx={{ marginBottom: 1 }}>
                  kontakt
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize="16px" fontWeight="bold">
                  E-mail
                </Typography>
                <Typography fontSize="16px">
                  braetspilsdruk@hotmail.com
                </Typography>
              </Grid>
              <Grid item>
                <Typography fontSize="16px" fontWeight="bold">
                  Nummer
                </Typography>
                <Typography fontSize="16px">31 53 97 59</Typography>
              </Grid>
              <Grid item>
                <Typography fontSize="16px" fontWeight="bold">
                  Adresse
                </Typography>
                <Typography fontSize="16px">
                  Arresøvej 25 8240 Risskov
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
