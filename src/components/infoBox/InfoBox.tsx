import {
  Box,
  Card,
  CardContent,
  Grid,
  SvgIconProps,
  Typography,
} from "@mui/material";
import React from "react";
import PrimaryButton from "../primaryButton/PrimaryButton";

interface InfoProps {
  iconSVG?: any;
  title: string;
  text: string;
  buttonText?: string;
  hasButton: boolean;
  buttonIcon?: React.ReactElement<SvgIconProps>;
  routingOnClick?: any;
}

export default function InfoBox(props: InfoProps) {
  return (
    <Card
      sx={{
        width: 340,
        height: 340,
        backgroundColor: "#9F70FD",
        margin: 1,
        boxShadow: 3,
        borderRadius: 4,
        display: "flex",
        flexDirection: "column",
        border: 1,
      }}>
      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Grid container direction={"column"} sx={{ flexGrow: 1 }}>
          <Grid
            item
            marginBottom={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            {props.iconSVG}
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography
              textTransform={"uppercase"}
              gutterBottom
              variant="h4"
              component="div"
              color="black">
              {props.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>{props.text}</Typography>
          </Grid>
        </Grid>
        <Grid container>
          {props.hasButton ? (
            <Grid item>
              <PrimaryButton
                onClick={props.routingOnClick}
                icon={props.buttonIcon}
                text={props.buttonText}
              />
            </Grid>
          ) : (
            <Grid item></Grid>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
}
