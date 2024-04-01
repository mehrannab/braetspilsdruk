import { Layout } from "@/common/layouts/Layout";
import InfoCard from "@/components/infoCard/InfoCard";
import InfoContent from "@/modules/info/InfoContent";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

export default function Info() {
  return (
    <Box marginTop={10}>
      <InfoContent />
    </Box>
  );
}

Info.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
