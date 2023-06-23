import CartContext from "@/contexts/CartContext";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { IFormInputShipping } from "../Checkout";

export default function Review() {
  const { ordres, totalPrice } = useContext(CartContext);
  const { watch } = useFormContext<IFormInputShipping>();
  const formData = watch();

  const payments = [
    { name: "Korttype:", detail: "" },
    { name: "Kortholder:", detail: formData.cardName },
    { name: "Kortnummer:", detail: formData.cardNumber },
    { name: "Udløbsdato:", detail: formData.expDate },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ordreoversigt
      </Typography>
      <List disablePadding>
        {ordres.map((order) => (
          <ListItem key={order.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={order.name} secondary={order.description} />
            <Typography variant="body2">{order.price + " kr"}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {totalPrice + " kr"}
          </Typography>
        </ListItem>
      </List>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Levering
          </Typography>
          <Typography gutterBottom>
            {formData.firstName} {formData.lastName}
          </Typography>
          <Typography gutterBottom>{formData.address}</Typography>
          <Typography gutterBottom>
            {formData.postalCode} {formData.city}
          </Typography>
        </Grid>
        <Grid item xs={8} sx={{ display: "grid", justifyContent: "flex-end" }}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Betaling
          </Typography>
          {payments.map((payment) => (
            <React.Fragment key={payment.name}>
              <Grid container spacing={2}>
                <Grid item>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
