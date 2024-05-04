import CartContext from "@/contexts/CartContext";
import CreateIcon from "@mui/icons-material/Create";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import {
  AppBar,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import ButtonsTopBar from "./appBarButtons/ButtonsTopBar";
import { useRouter } from "next/router";
import React from "react";

function ElevationScroll(props: { children: any }) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function TopBar() {
  const { ordres } = useContext(CartContext);
  const router = useRouter();
  const [addToBasket, setAddToBasket] = useState<boolean>(false);

  useEffect(() => {
    if (ordres.length > 0) {
      setAddToBasket(true);
    }

    const timer = setTimeout(() => {
      setAddToBasket(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [ordres.length]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
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
              {/* <Grid item>
                <ButtonsTopBar
                  icon={<CreateIcon />}
                  text="Lav selv"
                  onClick={() => router.push("/custom")}
                  pathnameCheck="/custom"
                />
              </Grid> */}
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
                  <IconButton onClick={() => router.push("/checkout")}>
                    <ShoppingBasketIcon
                      color={addToBasket ? "success" : "secondary"}
                      onClick={() => router.push("/checkout")}
                      sx={{ fontSize: 45, cursor: "pointer" }}
                    />
                  </IconButton>
                </Tooltip>
              ) : (
                <IconButton onClick={() => router.push("/checkout")}>
                  <ShoppingBasketIcon
                    color={addToBasket ? "success" : "secondary"}
                    sx={{ fontSize: 45, cursor: "pointer" }}
                  />
                </IconButton>
              )}
              <Typography
                variant="subtitle1"
                fontSize={20}
                fontWeight="bold"
                color={addToBasket ? "#2e7d32" : "#FF8911"}>
                {ordres.length}
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </React.Fragment>
  );
}
