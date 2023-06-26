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
import { useState, useContext } from "react";
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
      <Grid
        container
        spacing={12}
        justifyContent={"center"}
        alignContent={"flex-end"}
        sx={{ marginTop: 2 }}>
        <Grid item xs={12} textAlign={"center"}>
          <Typography variant="h5">
            købe brætspils her det billigt kom kom
          </Typography>
        </Grid>
        {faerdigeBraetspil.map((item: Item) => (
          <Grid item xs={3} key={item.id}>
            <Card
              sx={{ maxWidth: 350, borderColor: "black" }}
              variant="outlined">
              <Tooltip title="Forstør billede" placement="top">
                <Box
                  component="img"
                  sx={{
                    height: 230,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt="The house from the offer."
                  src={item.imgUrl}
                  onClick={(e) => handleImage(item.imgUrl)}
                />
              </Tooltip>
              <CardContent>
                <Typography>{item.name}</Typography>
                <Typography>{item.description}</Typography>
                <Typography>Pris: {item.price}</Typography>
                <Button onClick={() => addToCart(item)} variant="contained">
                  Tilføj til kurven
                </Button>
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
              maxHeight={"95%"}
              maxWidth={"95%"}
              alt="The house from the offer."
              src={item.imgUrl}
            />
          </Fade>
        </ModalImage>
      ))}
    </Box>
  );
}
