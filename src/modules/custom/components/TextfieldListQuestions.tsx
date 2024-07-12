import CartContext, { Item } from "@/contexts/CartContext";
import QuestionListContext, {
  QuestionRule,
} from "@/contexts/QuestionListContext";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListSubheader,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

interface FormValues {
  questions: QuestionRule[];
}

export default function TextfieldListQuestions() {
  let myuuid = uuidv4();
  const listSize: number = 44;
  const { questionList, setQuestionList } = useContext(QuestionListContext);
  const { addToCart, ordres } = useContext(CartContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: "onChange", // to validate on every change
  });

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    // Initialize the fields array
    Array.from({ length: listSize }).forEach((_, index) => {
      setValue(`questions.${index}.fieldNumber`, index + 1);
      setValue(`questions.${index}.id`, (index + 1).toString());
    });
  }, [setValue]);

  const onSubmit = (data: FormValues) => {
    console.log("Inside submit:", data);
    setQuestionList((prevList) => [...prevList, ...data.questions]);
    handleAddToCart();

    console.log(ordres);
  };

  const handleAddToCart = () => {
    const itemToAdd: Item = {
      id: myuuid,
      name: name,
      description: "Egen beskrivelse",
      price: 75,
      imgUrl: "dummy",
      questions: questionList as unknown as Item["questions"],
    };
    console.log("Inde i add to cart");
    console.log(itemToAdd);
    addToCart(itemToAdd);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction={"column"}>
        <Grid item>
          <Box
            sx={{
              backgroundColor: "#FF8911",
              borderRadius: 2,
              width: "100%",
              marginBottom: 2,
            }}>
            <List
              subheader={
                <ListSubheader
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 1,
                    borderBottom: 1,
                    borderTopRightRadius: 8,
                    borderTopLeftRadius: 8,
                    fontWeight: "bold",
                    fontSize: "18px",
                    backgroundColor: "#FF8911",
                  }}>
                  Spørgsmål/regel skabelon
                </ListSubheader>
              }>
              <Box
                sx={{
                  maxHeight: "560px", // Adjust this height as needed
                  overflow: "auto",
                }}>
                {Array.from({ length: listSize }).map((_, index) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <ListItem key={index}>
                    <TextField
                      {...register(`questions.${index}.content`, {
                        required: true,
                      })}
                      size="small"
                      sx={{ width: "600px" }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            {index + 1}
                          </InputAdornment>
                        ),
                      }}
                      error={!!errors.questions?.[index]?.content}
                      helperText={
                        errors.questions?.[index]?.content ? "Påkrævet" : ""
                      }
                    />
                  </ListItem>
                ))}
              </Box>
              <Grid container marginTop={2} justifyContent={"space-between"}>
                <Grid item marginTop={2} marginLeft={2}>
                  <TextField
                    size="small"
                    label="Spillets navn"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item marginTop={2} marginRight={4}>
                  <TextField
                    size="small"
                    sx={{ width: 400 }}
                    label="Spillets beskrivelse"
                  />
                </Grid>
              </Grid>
              <Grid
                container
                direction={"row"}
                marginTop={3}
                marginBottom={2}
                marginLeft={2}
                justifyContent={"space-between"}>
                <Grid item marginTop={1}>
                  <Typography>Pris: 75 kr</Typography>
                </Grid>
                <Grid item marginRight={6}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    size="small"
                    sx={{ borderRadius: 8 }}
                    disabled={!isValid}>
                    Tilføj til kurven
                  </Button>
                </Grid>
              </Grid>
            </List>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
