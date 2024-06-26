import { Button, Typography } from "@mui/material";
import React from "react";

interface ShowQuestionsButtonProps {
  text?: string;
  onClick?: any;
  disabled?: boolean;
}

export default function ShowQuestionsButton(props: ShowQuestionsButtonProps) {
  return (
    <Button
      disabled={props.disabled}
      variant="contained"
      size="large"
      color="success"
      sx={{ borderRadius: 4 }}
      onClick={props.onClick}>
      <Typography textTransform={"capitalize"}>{props.text}</Typography>
    </Button>
  );
}
