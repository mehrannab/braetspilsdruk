import { Layout } from "@/common/layouts/Layout";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

export default function Custom() {
  return (
    <>
      <Typography>Custom</Typography>
    </>
  );
}

Custom.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
