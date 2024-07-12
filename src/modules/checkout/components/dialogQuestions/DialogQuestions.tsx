import { Item } from "@/contexts/CartContext";
import { QuestionRule } from "@/contexts/QuestionListContext";
import {
  Dialog,
  DialogTitle,
  Grid,
  List,
  ListItem,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

interface DialogQuestionsProps {
  open: boolean;
  item: Item;
  onClose: (value: string) => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogQuestions(props: DialogQuestionsProps) {
  const handleClose = () => {
    props.onClose("");
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      TransitionComponent={Transition}>
      <Grid container direction={"column"}>
        <Grid
          item
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          sx={{ backgroundColor: "#9F70FD" }}>
          <DialogTitle fontWeight={"1000"}>Spillets felter</DialogTitle>
        </Grid>
        <Grid item>
          <List sx={{ backgroundColor: "#9F70FD" }}>
            {props.item.questions.map((item, index) => (
              <ListItem
                key={item.fieldNumber}
                sx={{
                  backgroundColor: index % 2 === 0 ? "#7F27FF" : "#9F70FD",
                }}>
                <Grid container alignItems="center">
                  <Grid item xs={2}>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.fieldNumber}:
                    </Typography>
                  </Grid>
                  <Grid item xs={10}>
                    <Typography textTransform="capitalize">
                      {item.content}
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Dialog>
  );
}
