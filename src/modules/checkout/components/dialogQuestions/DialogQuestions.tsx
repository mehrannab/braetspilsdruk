import { Item } from "@/contexts/CartContext";
import { QuestionRule } from "@/contexts/QuestionListContext";
import { Dialog, DialogTitle, List, ListItem, Typography } from "@mui/material";
import React from "react";

interface DialogQuestionsProps {
  open: boolean;
  item: Item;
  onClose: (value: string) => void;
}

export default function DialogQuestions(props: DialogQuestionsProps) {
  console.log(props.item.questions);

  const handleClose = () => {
    props.onClose("");
  };

  return (
    <Dialog open={props.open} onClose={handleClose}>
      <DialogTitle>Dine spørgsmål</DialogTitle>
      <List>
        {props.item.questions.map((item) => (
          <ListItem key={item.fieldNumber}>
            <Typography>{item.fieldNumber}: </Typography>
            <Typography textTransform={"capitalize"}>{item.content}</Typography>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}
