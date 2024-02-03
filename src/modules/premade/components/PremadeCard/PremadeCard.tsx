import {
  Box,
  Button,
  Card,
  CardContent,
  Fade,
  Grid,
  Modal,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import { useState, useContext, useEffect } from "react";
import faerdigeBraetspil from "../../../../data/faerdigeBraetspil.json";
import CartContext, { Item } from "@/contexts/CartContext";

const ModalImage = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    backgroundcolor: "red",
  },
});

export function PremadeCard() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("false");
  const { addToCart } = useContext(CartContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handleImage = (value: string) => {
    setImage(value);
    setOpen(true);
  };

  return (
    <Box>
      <Grid container spacing={10} sx={{ marginTop: 2 }}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h4">
            Her ses de færdiglavede brætspil som er på lager for nu
          </Typography>
        </Grid>
        {faerdigeBraetspil.map((item: Item) => (
          <Grid item md={6} key={item.id}>
            <Card
              sx={{
                borderColor: "black",
                marginBottom: 2,
              }}
              variant="outlined">
              <Tooltip title="Klik for at forstørre billede" placement="top">
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={item.imgUrl}
                  style={{ width: "100%", height: "100%" }}
                  onClick={(e) => handleImage(item.imgUrl ?? "")}
                />
              </Tooltip>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h4">{item.name}</Typography>
                    <Typography variant="caption" fontSize={14}>
                      {item.description}
                    </Typography>
                    <Typography variant="h6">Pris: {item.price} kr</Typography>
                  </Grid>
                  <Grid item>
                    <Button onClick={() => addToCart(item)} variant="contained">
                      Tilføj til kurven
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {faerdigeBraetspil.map((item: Item) => (
        <ModalImage
          key={item.id}
          open={open}
          onClose={handleClose}
          closeAfterTransition>
          <Fade in={open} timeout={500}>
            <Box
              component="img"
              maxHeight={"50%"}
              maxWidth={"50%"}
              alt="The house from the offer."
              src={item.imgUrl}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </Fade>
        </ModalImage>
      ))}
    </Box>
  );
}
