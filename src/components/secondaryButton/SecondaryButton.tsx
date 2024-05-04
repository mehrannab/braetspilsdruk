import { Button, SvgIconProps, Typography } from "@mui/material";
import React from "react";

interface SecondaryButtonProps {
  text?: string;
  icon?: React.ReactElement<SvgIconProps>;
  onClick?: any;
}

export default function SecondaryButton(props: SecondaryButtonProps) {
  return (
    <Button
      color="primary"
      variant="contained"
      size="small"
      sx={{ borderRadius: 8 }}
      endIcon={props.icon}
      onClick={props.onClick}>
      <Typography textTransform={"capitalize"}>{props.text}</Typography>
    </Button>
  );
}
