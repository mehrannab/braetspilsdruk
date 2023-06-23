import { Layout } from "@/common/layouts/Layout";
import { CheckoutContent } from "@/modules/checkout";
import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";

export default function Checkout() {
  return (
    <Box>
      <CheckoutContent />
    </Box>
  );
}

Checkout.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
