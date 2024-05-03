import { Button, Typography } from "@mui/material";
import React from "react";

interface ShowQuestionsButtonProps {
  text?: string;
}

export default function ShowQuestionsButton(props: ShowQuestionsButtonProps) {
  return (
    <Button
      variant="contained"
      size="large"
      color="success"
      sx={{ borderRadius: 4 }}>
      <Typography textTransform={"capitalize"}>{props.text}</Typography>
    </Button>
  );
}
