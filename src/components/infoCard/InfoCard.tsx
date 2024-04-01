import { Card, CardContent, Fade, Grid, Typography } from "@mui/material";
import React from "react";

interface InfoCardProps {
  cardTitle: string;
  text?: string;
  timeout?: number;
}

export default function InfoCard(props: InfoCardProps) {
  return (
    <Fade in={true} timeout={props.timeout}>
      <Card
        sx={{
          width: 340,
          height: 440,
          backgroundColor: "#9F70FD",
          margin: 1,
          boxShadow: 3,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          border: 1,
        }}>
        <CardContent
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}>
          <Grid container direction={"column"} sx={{ flexGrow: 1 }}>
            <Grid item>
              <Typography
                textTransform={"uppercase"}
                gutterBottom
                variant="h6"
                component="div"
                color="black">
                {props.cardTitle}
              </Typography>
            </Grid>
            <Grid item>
              <Typography>{props.text}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Fade>
  );
}
