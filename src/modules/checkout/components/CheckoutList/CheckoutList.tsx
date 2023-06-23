import CartContext from "@/contexts/CartContext";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export function CheckoutList() {
  const { ordres, removeFromCart, totalPrice } = useContext(CartContext);
  const router = useRouter();

  const handleRouting = (route: string) => () => {
    router.push(route);
  };

  return (
    <Grid
      container
      spacing={12}
      direction={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      sx={{ marginTop: 20 }}
    >
      <List
        sx={{ width: "100%", maxWidth: 500, bgcolor: "#FF6F3A" }}
        subheader={
          <>
            <ListSubheader sx={{ bgcolor: "#FF6F3A", fontWeight: "bold" }}>
              Din indkøbskurv
            </ListSubheader>
          </>
        }
      >
        {ordres.map((item) => (
          <>
            <ListItem key={item.id}>
              <ListItemText
                primary={item.name}
                secondary={item.price + " kr"}
              ></ListItemText>
              <Button color="success" onClick={() => removeFromCart(item)}>
                Slet
              </Button>
            </ListItem>
            <Divider variant="middle" />
          </>
        ))}
      </List>
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "#FF6F3A" }}>
        <ListItem>
          <ListItemText>Subtotal: {totalPrice + " kr"}</ListItemText>

          <Button
            variant="contained"
            color="success"
            disabled={totalPrice == 0}
            onClick={handleRouting("/checkout/payment")}
          >
            Betal
          </Button>
        </ListItem>
      </List>
    </Grid>
  );
}
