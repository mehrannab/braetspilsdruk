"use client";

import ListOfQuestions from "@/components/listofquestions/ListOfQuestions";
import QuestionListContext, {
  QuestionRule,
} from "@/contexts/QuestionListContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Button,
  Grid,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function TableWithQuestion() {
  const [counter, setCounter] = useState<number>(1);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<QuestionRule>();
  const [existingQuestion, setExistingQuestion] = useState<boolean>(false);
  const { questionList, setQuestionList } = useContext(QuestionListContext);

  useEffect(() => {
    setValue("fieldNumber", counter);
    if (counter === 46) {
      setCounter(45);
    }
  }, [counter, existingQuestion, setValue]);

  const handleDecrementField = () => {
    setCounter(counter - 1);
  };

  const handleIncrementField = () => {
    setCounter(counter + 1);
  };

  const onSubmit = (data: QuestionRule) => {
    const existingField = questionList.find(
      (item) => item.fieldNumber === data.fieldNumber
    );

    if (!existingField) {
      setQuestionList((prevList) => [...prevList, data]);
      setExistingQuestion(false);
      handleIncrementField();
      console.log(questionList);
    } else {
      setExistingQuestion(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={6} direction={"row"}>
          <Grid item>
            <Button type="submit" variant="contained">
              Tilføj spørgsmål
            </Button>
          </Grid>
          <Grid item>
            <TableContainer
              component={Paper}
              sx={{ border: "1px solid black" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{
                        borderRight: "1px solid black",
                        borderBottom: "1px solid black",
                      }}>
                      Fletnummer
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ borderBottom: "1px solid black" }}>
                      Spørgsmål/Regel
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderRight: "1px solid black",
                      }}>
                      <Grid container direction="row" spacing={2}>
                        <Grid item>
                          <Button
                            disabled={questionList.length === 45}
                            aria-label="increase"
                            variant="contained"
                            onClick={handleIncrementField}>
                            <AddIcon fontSize="small" />
                          </Button>
                        </Grid>
                        <Grid item>
                          <Typography>
                            {counter === 46 || questionList.length === 45 ? (
                              <CheckCircleIcon color="success" />
                            ) : (
                              counter
                            )}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Button
                            disabled={
                              questionList.length === 45 || counter === 1
                            }
                            aria-label="reduce"
                            variant="contained"
                            onClick={handleDecrementField}>
                            <RemoveIcon fontSize="small" />
                          </Button>
                        </Grid>
                      </Grid>
                    </TableCell>
                    <TableCell width={"680px"}>
                      <TextField
                        fullWidth
                        {...register("content", { required: true })}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </form>
      <Grid container>
        <Grid item>
          <ListOfQuestions />
        </Grid>
      </Grid>
      <Snackbar
        open={existingQuestion}
        autoHideDuration={6000}
        message="Feltnummeret har et eksisterende spørgsmål"
        onClose={() => {
          setExistingQuestion(false);
        }}
      />
    </>
  );
}
