import CartContext, { Item } from "@/contexts/CartContext";
import {
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import DialogQuestions from "../dialogQuestions/DialogQuestions";

export function CheckoutList() {
  const { ordres, removeFromCart, totalPrice } = useContext(CartContext);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleRouting = (route: string) => () => {
    router.push(route);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClickOpen(item: Item): void {
    setSelectedItem(item);
    setOpen(true);
  }

  return (
    <Grid
      container
      spacing={12}
      direction={"column"}
      justifyContent={"center"}
      alignContent={"center"}
      sx={{ marginTop: 20 }}>
      <List
        sx={{ width: "100%", maxWidth: 500, bgcolor: "#FF6F3A" }}
        subheader={
          <>
            <ListSubheader sx={{ bgcolor: "#FF6F3A", fontWeight: "bold" }}>
              Din indkøbskurv
            </ListSubheader>
          </>
        }>
        {ordres.map((item) => (
          <>
            <>
              <ListItem key={item.id}>
                <ListItemText
                  primary={item.name}
                  secondary={item.price + " kr"}></ListItemText>
                {item.price === 75 && (
                  <Button
                    variant="contained"
                    color="info"
                    onClick={() => handleClickOpen(item)}
                    sx={{ marginRight: 2 }}>
                    Dine spørgsmål
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => removeFromCart(item)}>
                  Slet
                </Button>
              </ListItem>
              <Divider variant="middle" />
            </>
          </>
        ))}
      </List>
      {selectedItem && (
        <DialogQuestions
          open={open}
          item={selectedItem}
          onClose={handleClose}
        />
      )}
      <List sx={{ width: "100%", maxWidth: 500, bgcolor: "#FF6F3A" }}>
        <ListItem>
          <ListItemText primary={"Levering"} secondary={"40 kr"} />
        </ListItem>
        <ListItem>
          <ListItemText>Subtotal: {totalPrice + 40 + " kr"}</ListItemText>
          <Button
            variant="contained"
            color="success"
            disabled={totalPrice == 0}
            onClick={handleRouting("/checkout/payment/information")}>
            Betal
          </Button>
        </ListItem>
      </List>
    </Grid>
  );
}
