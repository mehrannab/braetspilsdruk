import { Button, SvgIconProps, Typography } from "@mui/material";
import React from "react";

interface SecondaryButtonProps {
  text?: string;
  icon?: React.ReactElement<SvgIconProps>;
  onClick?: any;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function SecondaryButton(props: SecondaryButtonProps) {
  return (
    <Button
      color="primary"
      variant="contained"
      size="small"
      disabled={props.disabled}
      sx={{ borderRadius: 8 }}
      endIcon={props.icon}
      onClick={props.onClick}
      type={props.type}>
      <Typography textTransform={"capitalize"}>{props.text}</Typography>
    </Button>
  );
}
