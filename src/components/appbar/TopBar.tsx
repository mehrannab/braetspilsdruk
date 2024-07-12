import CartContext from "@/contexts/CartContext";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import ButtonsTopBar from "./appBarButtons/ButtonsTopBar";
import CreateIcon from "@mui/icons-material/Create";

function ElevationScroll(props: { children: any }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function TopBar() {
  const { ordres, totalPrice } = useContext(CartContext);
  const router = useRouter();

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="absolute" color="transparent">
          <Toolbar>
            <Grid container justifyContent={"space-evenly"} display={"flex"}>
              <Grid item>
                <ButtonsTopBar
                  icon={<HomeIcon />}
                  text="Hjem"
                  onClick={() => router.push("/")}
                  pathnameCheck="/"
                />
              </Grid>
              <Grid item>
                <ButtonsTopBar
                  icon={<CreateIcon />}
                  text="Lav selv"
                  onClick={() => router.push("/custom")}
                  pathnameCheck="/custom"
                />
              </Grid>
              <Grid item>
                <ButtonsTopBar
                  icon={<FactCheckIcon />}
                  text="Færdiglavet"
                  onClick={() => router.push("/premade")}
                  pathnameCheck="/premade"
                />
              </Grid>
              <Grid item>
                <ButtonsTopBar
                  icon={<InfoIcon />}
                  text="Info"
                  onClick={() => router.push("/info")}
                  pathnameCheck="/info"
                />
              </Grid>
            </Grid>
            <Grid item display={"flex"}>
              {ordres.length > 0 ? (
                <Tooltip
                  sx={{ borderRadius: 10 }}
                  title={
                    <Grid container direction={"column"}>
                      <Grid
                        item
                        marginBottom={1}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Typography>Din indkøbskurv</Typography>
                      </Grid>
                      {ordres.map((item) => (
                        <Grid
                          item
                          key={item.id}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}>
                          <Typography>{item.name}</Typography>
                          <Typography>{item.price} kr</Typography>
                        </Grid>
                      ))}
                      <Grid
                        item
                        marginTop={1}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}>
                        <Typography>Levering</Typography>
                        <Typography>40 kr</Typography>
                      </Grid>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}>
                        <Typography>Pris i alt</Typography>
                        <Typography>{totalPrice + 40} kr</Typography>
                      </Grid>
                      <Grid
                        item
                        marginTop={1}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Button
                          variant="contained"
                          sx={{ borderRadius: 8 }}
                          color="success"
                          onClick={() => router.push("/checkout")}>
                          <Typography textTransform={"capitalize"}>
                            Indkøbskurv
                          </Typography>
                        </Button>
                      </Grid>
                    </Grid>
                  }
                  placement="bottom">
                  <IconButton onClick={() => router.push("/checkout")}>
                    <ShoppingBasketIcon
                      color={"secondary"}
                      onClick={() => router.push("/checkout")}
                      sx={{ fontSize: 45 }}
                    />
                    <Typography
                      variant="subtitle1"
                      fontSize={20}
                      fontWeight="bold"
                      color={"#FF8911"}
                      sx={{
                        marginBottom: 4,
                        position: "absolute",
                        marginLeft: 5,
                      }}>
                      {ordres.length}
                    </Typography>
                  </IconButton>
                </Tooltip>
              ) : (
                <IconButton onClick={() => router.push("/checkout")}>
                  <ShoppingBasketIcon
                    color={"secondary"}
                    sx={{ fontSize: 45 }}
                  />
                </IconButton>
              )}
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
