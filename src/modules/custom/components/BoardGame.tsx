import { Box } from "@mui/material";
import Image from "next/image";
import braetspilbane from "../../../images/braetspilbane.png";

export function BoardGame() {
  return (
    <Box>
      <Image
        src={braetspilbane}
        alt={"Braetspilsdruk"}
        width={550}
        height={450}
      />
    </Box>
  );
}
