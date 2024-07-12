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
      variant="text"
      startIcon={props.icon}
      color="secondary"
      size="large"
      onClick={props.onClick}
      disabled={props.pathnameCheck === pathname}
      sx={{
        fontWeight: "bold",
        ":hover": {
          bgcolor: "#301934",
        },

        "&.Mui-disabled": {
          color: "#FF8911",
          backgroundColor: "#6D1FDF",
          borderBottom: 3,
        },
      }}>
      {props.text}
    </Button>
  );
}
