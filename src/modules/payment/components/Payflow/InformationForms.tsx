import TopBar from "@/components/appbar/TopBar";
import CartContext from "@/contexts/CartContext";
import {
  Alert,
  Button,
  Container,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { IFormInputShipping } from "../Checkout/Checkout";

export default function InformationForms() {
  const { ordres, totalPrice } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<IFormInputShipping>();
  const router = useRouter();

  const onSubmit = (data: IFormInputShipping) => {
    sessionStorage.setItem("formData", JSON.stringify(data));
    router.push("/checkout/payment/resume");
  };

  const onError = (errors: any, e: any) => {};

  return (
    <>
      <TopBar />
      <Container component="main" sx={{ marginTop: 14 }}>
        {ordres.length === 0 && (
          <Alert
            variant="standard"
            severity="warning"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "60%",
              mx: "auto",
            }}>
            <Typography color="#ed6c02">
              Du kan ikke fortsætte til checkout, da din indkøbskurv er tom!
            </Typography>
          </Alert>
        )}
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            paddingY={6}
            borderRadius={8}
            marginTop={10}
            marginBottom={10}
            sx={{ backgroundColor: "#FF8911", width: "60%", mx: "auto" }}>
            <Grid item marginBottom={6}>
              <Typography variant="h6" fontWeight="bold">
                Dine informationer
              </Typography>
            </Grid>
            <Grid item marginBottom={4}>
              <Grid container direction={"column"} rowGap={4}>
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <TextField
                    label="Fornavn"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: 4 } }}
                    {...register("firstName", {
                      required: "Fornavn er påkrævet",
                    })}
                    error={!!errors.firstName}
                    helperText={
                      errors.firstName ? errors.firstName.message : " "
                    }
                    FormHelperTextProps={{
                      sx: { minHeight: "1em" },
                    }}
                  />

                  <div style={{ width: 16 }} />
                  <TextField
                    label="Efternavn"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: 4 } }}
                    {...register("lastName", {
                      required: "Efternavn er påkrævet",
                    })}
                    error={!!errors.lastName}
                    helperText={errors.lastName ? errors.lastName.message : " "}
                    FormHelperTextProps={{
                      sx: { minHeight: "1em" },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <TextField
                    label="Mobilnummer"
                    variant="outlined"
                    InputProps={{
                      sx: { borderRadius: 4, width: "90%" },
                      startAdornment: (
                        <InputAdornment position="start">+ 45</InputAdornment>
                      ),
                    }}
                    {...register("phoneNumber", {
                      required: "Mobilnummer er påkrævet",
                      minLength: {
                        value: 8,
                        message: "Mindst otte tal",
                      },
                      maxLength: {
                        value: 8,
                        message: "Max otte tal",
                      },
                    })}
                    error={!!errors.phoneNumber}
                    helperText={
                      errors.phoneNumber ? errors.phoneNumber.message : " "
                    }
                    FormHelperTextProps={{
                      sx: { minHeight: "1em" },
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: 4 } }}
                    {...register("email", {
                      required: "Email er påkrævet",
                      pattern: {
                        value: /.*@.*/,
                        message: "Feltet skal indeholde et @",
                      },
                    })}
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : " "}
                    FormHelperTextProps={{
                      sx: { minHeight: "1em" },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <TextField
                    fullWidth
                    label="Adresse"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: 4 } }}
                    {...register("address", {
                      required: "Addresse er påkrævet",
                    })}
                    error={!!errors.address}
                    helperText={errors.address ? errors.address.message : " "}
                    FormHelperTextProps={{
                      sx: { minHeight: "1em" },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <TextField
                    label="Postnummer"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: 4 } }}
                    {...register("postalCode", {
                      required: "Postnummer er påkrævet",
                    })}
                    error={!!errors.postalCode}
                    helperText={
                      errors.postalCode ? errors.postalCode.message : " "
                    }
                    FormHelperTextProps={{
                      sx: { minHeight: "1em" },
                    }}
                  />
                  <TextField
                    label="By"
                    variant="outlined"
                    InputProps={{ sx: { borderRadius: 4 } }}
                    {...register("city", {
                      required: "By er påkrævet",
                    })}
                    error={!!errors.city}
                    helperText={errors.city ? errors.city.message : " "}
                    FormHelperTextProps={{
                      sx: { minHeight: "1em" },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                  <Button
                    variant="contained"
                    onClick={() => router.push("/checkout")}
                    size="large"
                    sx={{ borderRadius: 8 }}>
                    TILBAGE
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    type="submit"
                    disabled={ordres.length === 0}
                    sx={{ borderRadius: 8 }}>
                    FORTSÆT
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}
