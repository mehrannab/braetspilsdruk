import { Layout } from "@/common/layouts/Layout";
import { PremadeContent } from "@/modules/premade";
import { ReactElement } from "react";

export default function Premade() {
  return <PremadeContent />;
}

Premade.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
