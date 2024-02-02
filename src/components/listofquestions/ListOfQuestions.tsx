import QuestionListContext from "@/contexts/QuestionListContext";
import { Chip, Grid, List, ListItem, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import QuestionFieldIcon from "./QuestionFieldIcon";

export default function ListOfQuestions() {
  const { questionList, setQuestionList } = useContext(QuestionListContext);
  const sortedQuestionList = [...questionList].sort(
    (a, b) => a.fieldNumber - b.fieldNumber
  );

  const getColumnQuestions = (start: number, end: number) =>
    sortedQuestionList.slice(start, end);

  const deleteQuestion = (field: number) => {
    const updatedQuestionList = questionList.filter(
      (item) => item.fieldNumber !== field
    );

    setQuestionList(updatedQuestionList);
  };

  return (
    <Grid container spacing={2}>
      {[0, 9, 18, 27, 36, 45].map((start) => (
        <Grid item key={start}>
          <List>
            {getColumnQuestions(start, start + 9).map((item) => (
              <ListItem key={item.fieldNumber}>
                <Grid container alignItems="center">
                  <Grid item>
                    <Typography sx={{ textAlign: "center" }}>
                      <QuestionFieldIcon field={item.fieldNumber} />
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ textAlign: "center", marginBottom: 1 }}>
                      <Chip
                        label={item.content}
                        sx={{ background: "#FF6F3A" }}
                        onDelete={() => deleteQuestion(item.fieldNumber)}
                      />
                    </Typography>
                  </Grid>
                </Grid>
              </ListItem>
            ))}
          </List>
        </Grid>
      ))}
    </Grid>
  );
}
