import { Grid } from "@mui/material";
import Checkout, { IFormInputShipping } from "./components/Checkout/Checkout";
import InformationForms from "./components/Payflow/InformationForms";
import { FormProvider, useForm } from "react-hook-form";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import ResumeListForms from "./components/Payflow/ResumeListForms";

export function PaymentContent() {
  const methods = useForm<IFormInputShipping>();
  const pathname = usePathname();

  const values = methods.getValues();
  return (
    <FormProvider {...methods}>
      {/* <Checkout /> */}
      {pathname === "/checkout/payment/information" && <InformationForms />}
      {pathname === "/checkout/payment/resume" && <ResumeListForms />}
    </FormProvider>
  );
}
