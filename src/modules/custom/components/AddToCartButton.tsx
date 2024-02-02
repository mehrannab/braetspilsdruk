import CartContext, { Item } from "@/contexts/CartContext";
import QuestionListContext from "@/contexts/QuestionListContext";
import { Box, Button, Grid, Paper, Typography, styled } from "@mui/material";
import React, { useContext, useEffect } from "react";

export function AddToCartButton() {
  const { questionList, setQuestionList } = useContext(QuestionListContext);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const itemToAdd: Item = {
      id: "2",
      name: "Eget designet spil",
      description: "Egen beskrivelse",
      price: 75,
      imgUrl: "dummy",
      questions: questionList as unknown as Item["questions"],
    };

    addToCart(itemToAdd);
  };

  return (
    <>
      <Typography variant="h5">Pris 99 kr</Typography>
      <Button
        disabled={questionList.length != 45}
        variant="contained"
        color="primary"
        onClick={handleAddToCart}>
        Tilføj til kurven
      </Button>
    </>
  );
}
