import PrimaryButton from "@/components/primaryButton/PrimaryButton";
import ShowQuestionsButton from "@/components/showQuestionsButton/ShowQuestionsButton";
import CartContext from "@/contexts/CartContext";
import { Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IFormInputShipping } from "../../Checkout/Checkout";
import { useRouter } from "next/navigation";
import AlertDialogConfirm from "../../Checkout/components/AlertDialogConfirm";

export default function ButtonPay() {
  const { totalPrice } = useContext(CartContext);
  let fullPrice = totalPrice + 40;
  const [loading, setLoading] = React.useState(false);
  const [errorPayment, setErrorPayment] = React.useState(false);
  const router = useRouter();
  const methods = useForm<IFormInputShipping>();

  const onSubmit: SubmitHandler<IFormInputShipping> = async (data) => {
    try {
      setLoading(true);

      // const payload = {
      //   data,
      //   ordres: ordres,
      //   totalPrice: totalPrice,
      // };

      // const response = await fetch("/api/payment", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/JSON",
      //   },
      //   body: JSON.stringify(payload),
      // });

      const payload = {
        data: data.email,
      };

      console.log(payload);

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(payload),
      });

      console.log(response);

      if (response.ok) {
        router.push("");
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      setErrorPayment(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAndNext = () => {
    if (loading === false) {
      methods.handleSubmit(onSubmit)();
    }
    setErrorPayment(false);
  };

  return (
    <>
      {errorPayment && <AlertDialogConfirm />}
      <Grid container marginLeft={1}>
        <Grid item>
          <Button
            variant="text"
            size="large"
            sx={{ color: "darkblue" }}
            onClick={() => {
              router.push("/checkout/payment/information");
            }}>
            Tilbage
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={"center"}
        direction={"column"}
        alignItems={"center"}>
        <Grid item>
          <Typography variant="caption" display="block">
            Ordrer totalt (inkl. levering)
          </Typography>
          <Typography
            textAlign={"center"}
            textTransform={"uppercase"}
            variant="h4">
            {fullPrice}.00 kr
          </Typography>
        </Grid>
        <Grid item marginTop={1}>
          <ShowQuestionsButton
            text={loading ? "Indlæser..." : "Fuldfør køb"}
            onClick={handleSubmitAndNext}
            disabled={loading}
          />
        </Grid>
      </Grid>
    </>
  );
}
