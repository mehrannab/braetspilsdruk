import { theme } from "@/common/theme/Theme";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useFormContext } from "react-hook-form";
import { IFormInputShipping } from "../Checkout";
import { InputAdornment } from "@mui/material";

export default function PaymentForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInputShipping>();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Betalingsoplysninger
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            color="success"
            id="cardName"
            label="Navn på kort"
            fullWidth
            {...register("cardName", {
              required: true,
            })}
            variant="outlined"
            autoComplete="new-password"
            error={!!errors.cardName}
            helperText={errors.cardName ? "Dette felt skal udfyldes" : null}
            sx={{
              ...(errors.cardName && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.cardName && "black",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            color="success"
            id="cardNumber"
            label="Kortnummer"
            {...register("cardNumber", {
              required: true,
            })}
            fullWidth
            variant="outlined"
            autoComplete="new-password"
            error={!!errors.cardNumber}
            helperText={errors.cardNumber ? "Dette felt skal udfyldes" : null}
            sx={{
              ...(errors.cardNumber && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.cardNumber && "black",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            color="success"
            id="expDate"
            label="Udløbsdato"
            {...register("expDate", {
              required: true,
              pattern: {
                value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                message: "",
              },
            })}
            fullWidth
            autoComplete="new-password"
            variant="outlined"
            error={!!errors.expDate}
            helperText={
              errors.expDate
                ? "Dette felt skal udfyldes med formen MM/YY og have en gyldig dato"
                : null
            }
            sx={{
              ...(errors.expDate && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.expDate && "black",
              },
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            color="success"
            id="cvv"
            label="CVV/Sikkerhedskode"
            {...register("cvv", {
              required: true,
              pattern: /^[0-9]{3}$/,
            })}
            error={!!errors.cvv}
            helperText={
              errors.cvv ? "Dette felt skal udfyldes med præcis 3 tal" : ""
            }
            sx={{
              ...(errors.cvv && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.cvv && "black",
              },
            }}
            fullWidth
            autoComplete="new-password"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
