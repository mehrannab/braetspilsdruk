import CartContext from "@/contexts/CartContext";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  AppBar,
  Button,
  Grid,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { NavDrawer } from "../drawer/NavDrawer";

export function AppBarDrawer() {
  const { ordres } = useContext(CartContext);
  const router = useRouter();
  let currentUrl = "";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    currentUrl = window.location.href;
  }, []);

  const handleRouting = (route: string) => () => {
    router.push(route);
  };

  return (
    <AppBar position="fixed">
      {currentUrl !== "http://localhost:3000/checkout/payment" ? (
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <NavDrawer />
            </Grid>
            <Grid item display={"flex"}>
              <Tooltip
                title={
                  <div>
                    {ordres.map((item) => (
                      <div key={item.id}>
                        {item.name} - {item.price} kr
                      </div>
                    ))}
                  </div>
                }
                placement="bottom">
                <ShoppingBasketIcon
                  fontSize="large"
                  onClick={handleRouting("/checkout")}
                />
              </Tooltip>
              <Typography variant="subtitle1" fontWeight="bold">
                {ordres.length}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      ) : (
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <Button
                size="large"
                sx={{ backgroundColor: "#deb887" }}
                variant="contained"
                onClick={handleRouting("/")}>
                Gå til startside
              </Button>
            </Grid>
            <Grid item display={"flex"}>
              <Tooltip title="Se indkøbskurv" placement="left">
                <ShoppingBasketIcon
                  fontSize="large"
                  onClick={handleRouting("/checkout")}
                />
              </Tooltip>
              <Typography variant="subtitle1" fontWeight="bold">
                {ordres.length}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      )}
    </AppBar>
  );
}
