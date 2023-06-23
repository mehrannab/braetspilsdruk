import { Layout } from "@/common/layouts/Layout";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

export default function Info() {
  return (
    <>
      <Typography>Info</Typography>;
    </>
  );
}

Info.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
