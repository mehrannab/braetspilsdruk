import { Link, Typography } from "@mui/material";
import React from "react";

interface FooterListItemProps {
  name: string;
  route: string;
}

export default function FooterListItem(props: FooterListItemProps) {
  return (
    <Typography color="black" fontSize="16px">
      <Link color="blue" underline="hover" href={`/${props.route}`}>
        {props.name}
      </Link>
    </Typography>
  );
}
