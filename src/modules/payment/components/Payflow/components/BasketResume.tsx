import CartContext, { Item } from "@/contexts/CartContext";
import { Grid, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

export default function BasketResume() {
  const { ordres, totalPrice } = useContext(CartContext);
  const [studenterdrukspil, setStudenterdrukspil] = useState<Item[]>([]);
  const [sommerdrukspil, setSommerdrukspil] = useState<Item[]>([]);
  const [festivaldrukspil, setFestivaldrukspil] = useState<Item[]>([]);
  const [juledrukspil, setJuledrukspil] = useState<Item[]>([]);

  useEffect(() => {
    setStudenterdrukspil(ordres.filter((x) => x.name === "Studenterdrukspil"));
    setSommerdrukspil(ordres.filter((x) => x.name === "Sommerdrukspil"));
    setFestivaldrukspil(ordres.filter((x) => x.name === "Festivaldrukspil"));
    setJuledrukspil(ordres.filter((x) => x.name === "Juledrukspil"));
  }, [ordres]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{ width: "100%" }}>
      <Grid item marginLeft={2}>
        <Typography fontWeight={"bold"} variant="h6">
          Indkøbskurv
        </Typography>
      </Grid>
      <Grid
        container
        marginX={2}
        marginY={1}
        padding={1}
        gap={4}
        direction={"column"}
        borderRadius={4}
        sx={{ backgroundColor: "#ffb366" }}>
        {sommerdrukspil.length != 0 && (
          <Grid item marginLeft={2} container justifyContent={"space-between"}>
            <Grid item>
              <Typography>{sommerdrukspil.length} x Sommerdrukspil</Typography>
              <Typography variant="subtitle2" display="block">
                Pr. stk {sommerdrukspil[0].price} KR.
              </Typography>
            </Grid>
            <Grid item marginRight={2}>
              <Typography>
                I alt {sommerdrukspil.length * sommerdrukspil[0].price} KR.
              </Typography>
            </Grid>
          </Grid>
        )}
        {studenterdrukspil.length != 0 && (
          <Grid item marginLeft={2} container justifyContent={"space-between"}>
            <Grid item>
              <Typography>
                {studenterdrukspil.length} x Studenterdrukspil
              </Typography>
              <Typography variant="subtitle2" display="block">
                Pr. stk {studenterdrukspil[0].price} KR.
              </Typography>
            </Grid>
            <Grid item marginRight={2}>
              <Typography>
                I alt {studenterdrukspil.length * studenterdrukspil[0].price}{" "}
                KR.
              </Typography>
            </Grid>
          </Grid>
        )}
        {festivaldrukspil.length != 0 && (
          <Grid item marginLeft={2} container justifyContent={"space-between"}>
            <Grid item>
              <Typography>
                {festivaldrukspil.length} x Festivaldrukspil
              </Typography>
              <Typography variant="subtitle2" display="block">
                Pr. stk {festivaldrukspil[0].price} KR.
              </Typography>
            </Grid>
            <Grid item marginRight={2}>
              <Typography>
                I alt {festivaldrukspil.length * festivaldrukspil[0].price} KR.
              </Typography>
            </Grid>
          </Grid>
        )}
        {juledrukspil.length != 0 && (
          <Grid item marginLeft={2} container justifyContent={"space-between"}>
            <Grid item>
              <Typography>{juledrukspil.length} x Juledrukspil</Typography>
              <Typography variant="subtitle2" display="block">
                Pr. stk {juledrukspil[0].price} KR.
              </Typography>
            </Grid>
            <Grid item marginRight={2}>
              <Typography>
                I alt {juledrukspil.length * juledrukspil[0].price} KR.
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
