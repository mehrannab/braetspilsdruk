import { Layout } from "@/common/layouts/Layout";
import { CustomContent } from "@/modules/custom";
import Typography from "@mui/material/Typography";
import { ReactElement } from "react";

export default function Custom() {
  return (
    <>
      <CustomContent />
    </>
  );
}

Custom.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
