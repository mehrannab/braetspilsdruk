import { AppBarDrawer } from "@/components/appbar/AppBarDrawer";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import AddressForm from "./components/AddressForm";
import PaymentForm from "./components/PaymentForm";
import Review from "./components/Review";

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

  const onSubmit: SubmitHandler<IFormInputShipping> = async (data) => {
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Payment successful");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    methods.trigger().then((isValid) => {
      if (isValid) {
        setActiveStep(activeStep + 1);
      }
    });

    console.log(activeStep, " - Activestep");
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmitAndNext = () => {
    methods.handleSubmit(onSubmit)();
    handleNext();
  };

  return (
    <>
      <AppBarDrawer />
      <Container component="main" maxWidth="sm" sx={{ mb: 4, marginTop: 5 }}>
        <Paper
          variant="outlined"
          sx={{
            my: { xs: 3, md: 6 },
            p: { xs: 2, md: 3 },
            backgroundColor: "#FF6F3A",
          }}
        >
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
                        sx={{ mt: 3, ml: 1 }}
                      >
                        Tilbage
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      onClick={
                        activeStep === steps.length - 1
                          ? handleSubmitAndNext
                          : handleNext
                      }
                      sx={{ mt: 3, ml: 1 }}
                      color="success"
                    >
                      {activeStep === steps.length - 1
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
