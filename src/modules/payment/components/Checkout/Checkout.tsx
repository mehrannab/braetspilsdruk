import { AppBarDrawer } from "@/components/appbar/AppBarDrawer";
import CartContext from "@/contexts/CartContext";
import { Alert, styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useContext } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import AddressForm from "./components/AddressForm";
import AlertDialogConfirm from "./components/AlertDialogConfirm";
import PaymentForm from "./components/PaymentForm";
import Review from "./components/Review";
import TopBar from "@/components/appbar/TopBar";

export interface IFormInputShipping {
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  city: string;
  postalCode: string;
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
}

const steps = ["Leveringsadresse", "Betalingsoplysninger", "Færdig"];

const CustomStepLabel = styled(StepLabel)`
  .MuiStepIcon-root {
    color: #2e7d32;
  }
  .css-1gcgoqm-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
    color: #2e7d32;
  }
  .css-kqjvcq-MuiStepIcon-text {
    fill: #ffffff;
  }
  .css-1gcgoqm-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
    color: #2e7d32;
  }
`;

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const methods = useForm<IFormInputShipping>();
  const email = methods.getValues().email;
  const { ordres, totalPrice } = useContext(CartContext);
  const [loading, setLoading] = React.useState(false);
  const [errorPayment, setErrorPayment] = React.useState(false);

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
        handleNext();
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      setErrorPayment(true);
    } finally {
      setLoading(false);
    }
  };

  const handleNext = () => {
    methods.trigger().then((isValid) => {
      if (isValid) {
        setActiveStep(activeStep + 1);
      }
    });
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitAndNext = () => {
    if (loading === false) {
      methods.handleSubmit(onSubmit)();
    }
    setErrorPayment(false);
  };

  return (
    <>
      <TopBar />
      {errorPayment && <AlertDialogConfirm />}
      <Container component="main" maxWidth="sm" sx={{ mb: 4, marginTop: 10 }}>
        {ordres.length === 0 && (
          <Alert variant="standard" severity="warning">
            <Typography color="#ed6c02">
              Du kan ikke fortsætte til checkout, da din indkøbskurv er tom!
            </Typography>
          </Alert>
        )}
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
          }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <CustomStepLabel>{label}</CustomStepLabel>
              </Step>
            ))}
          </Stepper>
          <FormProvider {...methods}>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Tak for din bestilling.
                </Typography>
                <Typography variant="subtitle1">
                  Dit ordrenummer er #2001539. Vi har sendt en e-mail til{" "}
                  {email} med din ordrebekræftelse og sender dig en opdatering,
                  når din ordre er blevet afsendt.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <form>
                  {getStepContent(activeStep)}
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    {activeStep !== 0 && (
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleBack}
                        sx={{ mt: 3, ml: 1 }}>
                        Tilbage
                      </Button>
                    )}
                    <Button
                      disabled={ordres.length === 0 || loading}
                      variant="contained"
                      onClick={
                        activeStep === steps.length - 1
                          ? handleSubmitAndNext
                          : handleNext
                      }
                      sx={{ mt: 3, ml: 1 }}
                      color="success">
                      {loading
                        ? "Loading..."
                        : activeStep === steps.length - 1
                        ? "Placer ordre"
                        : "Næste"}
                    </Button>
                  </Box>
                </form>
              </React.Fragment>
            )}
          </FormProvider>
        </Paper>
      </Container>
    </>
  );
}
