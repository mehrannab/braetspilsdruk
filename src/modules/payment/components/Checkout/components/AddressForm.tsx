import { theme } from "@/common/theme/Theme";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useEffect } from "react";
import { SubmitHandler, useForm, useFormContext } from "react-hook-form";
import { IFormInputShipping } from "../Checkout";

export default function AddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<IFormInputShipping>();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Leveringsadresse
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <TextField
            color="success"
            id="firstName"
            label="Fornavn"
            fullWidth
            {...register("firstName", {
              required: true,
            })}
            variant="outlined"
            error={!!errors.firstName}
            helperText={errors.firstName ? "Dette felt skal udfyldes" : null}
            sx={{
              ...(errors.firstName && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.firstName && "black",
              },
            }}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            label="Efternavn"
            fullWidth
            color="success"
            variant="outlined"
            {...register("lastName", {
              required: true,
            })}
            error={!!errors.lastName}
            helperText={errors.lastName ? "Dette felt skal udfyldes" : null}
            sx={{
              ...(errors.lastName && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.lastName && "black",
              },
            }}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            label="Adresse"
            fullWidth
            color="success"
            variant="outlined"
            {...register("address", {
              required: true,
            })}
            error={!!errors.address}
            helperText={errors.address ? "Dette felt skal udfyldes" : null}
            sx={{
              ...(errors.address && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.address && "black",
              },
            }}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            label="Email"
            fullWidth
            color="success"
            variant="outlined"
            {...register("email", {
              required: true,
            })}
            error={!!errors.email}
            helperText={errors.email ? "Dette felt skal udfyldes" : null}
            sx={{
              ...(errors.email && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.email && "black",
              },
            }}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            label="By"
            fullWidth
            color="success"
            variant="outlined"
            {...register("city", {
              required: true,
            })}
            error={!!errors.city}
            helperText={errors.city ? "Dette felt skal udfyldes" : null}
            sx={{
              ...(errors.city && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.city && "black",
              },
            }}
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            label="Postnummer"
            color="success"
            variant="outlined"
            fullWidth
            {...register("postalCode", {
              required: true,
              pattern: /^[0-9]{4}$/,
            })}
            error={!!errors.postalCode}
            helperText={
              errors.postalCode
                ? "Dette felt skal udfyldes med præcis 4 tal"
                : ""
            }
            sx={{
              ...(errors.postalCode && {
                borderColor: theme.palette.error.main,
              }),
              "& .css-hvhz56-MuiFormHelperText-root.Mui-error": {
                color: errors.postalCode && "black",
              },
            }}
            autoComplete="new-password"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
