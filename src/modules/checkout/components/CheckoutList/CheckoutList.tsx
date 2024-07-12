import CartContext, { Item } from "@/contexts/CartContext";
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
import { useContext, useState } from "react";
import DialogQuestions from "../dialogQuestions/DialogQuestions";
import ShowQuestionsButton from "@/components/showQuestionsButton/ShowQuestionsButton";

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
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={"column"}
      paddingY={6}
      borderRadius={8}
      marginTop={14}
      marginBottom={10}
      sx={{ backgroundColor: "#FF8911", width: "60%", mx: "auto" }}>
      <Grid item marginBottom={6}>
        <Typography variant="h6" fontWeight="bold">
          Dine indkøbskurv
        </Typography>
      </Grid>
      <Grid item sx={{ width: "80%" }}>
        {ordres.map((item) => (
          // eslint-disable-next-line react/jsx-key
          <List>
            <ListItem key={item.id}>
              <Grid container justifyContent={"space-between"}>
                <Grid item>
                  <ListItemText
                    primary={item.name}
                    secondary={item.price + " kr"}></ListItemText>
                </Grid>

                {item.price === 75 && (
                  <Grid item marginRight={10}>
                    <ShowQuestionsButton
                      text="Dine spørgsmål"
                      onClick={() => handleClickOpen(item)}
                    />
                  </Grid>
                )}
                <Grid item>
                  <ShowQuestionsButton
                    text="Slet"
                    onClick={() => removeFromCart(item)}
                  />
                </Grid>
              </Grid>
            </ListItem>
            <Divider variant="middle" />
          </List>
        ))}
      </Grid>

      {selectedItem && (
        <DialogQuestions
          open={open}
          item={selectedItem}
          onClose={handleClose}
        />
      )}
      <Grid item marginTop={6} sx={{ width: "80%" }}>
        <List>
          <ListItem>
            <ListItemText primary={"Levering"} secondary={"40 kr"} />
          </ListItem>
          <ListItem>
            <ListItemText>Subtotal: {totalPrice + 40 + " kr"}</ListItemText>
            <ShowQuestionsButton
              text="Betal"
              disabled={totalPrice == 0}
              onClick={handleRouting("/checkout/payment/information")}
            />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
