import { Layout } from "@/common/layouts/Layout";
import { CheckoutList } from "@/modules/checkout/components/checkoutList/CheckoutList";
import { ReactElement } from "react";

export default function Checkout() {
  return <CheckoutList />;
}

Checkout.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
