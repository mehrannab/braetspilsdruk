import { Button, SvgIconProps, Typography } from "@mui/material";
import React from "react";

interface PrimaryButton {
  text?: string;
  icon?: React.ReactElement<SvgIconProps>;
  onClick?: any;
}

export default function PrimaryButton(props: PrimaryButton) {
  return (
    <Button
      color="secondary"
      variant="contained"
      size="small"
      sx={{ borderRadius: 8 }}
      endIcon={props.icon}
      onClick={props.onClick}>
      <Typography textTransform={"capitalize"}>{props.text}</Typography>
    </Button>
  );
}
