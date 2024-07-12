import { Layout } from "@/common/layouts/Layout";
import { QuestionListProvider } from "@/contexts/QuestionListContext";
import { CustomContent } from "@/modules/custom";
import { ReactElement } from "react";

export default function Custom() {
  return (
    <QuestionListProvider>
      <CustomContent />
    </QuestionListProvider>
  );
}

Custom.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
