import { Button } from "@mui/material";
import { usePathname } from "next/navigation";
import React from "react";

interface ButtonsTopBarProps {
  icon: React.ReactNode;
  text: string;
  onClick: () => void;
  pathnameCheck: string;
}

export default function ButtonsTopBar(props: ButtonsTopBarProps) {
  const pathname = usePathname();

  return (
    <Button
      variant="contained"
      startIcon={props.icon}
      color="secondary"
      onClick={props.onClick}
      disabled={props.pathnameCheck === pathname}
      sx={{
        ...(props.pathnameCheck === pathname && {
          bgcolor: "grey.500",
          color: "white",
          ":hover": {
            bgcolor: "grey.700",
          },
        }),
        "&.Mui-disabled": {
          bgcolor: "grey.500",
          color: "white",
          ":hover": {
            bgcolor: "grey.500",
          },
        },
      }}>
      {props.text}
    </Button>
  );
}
