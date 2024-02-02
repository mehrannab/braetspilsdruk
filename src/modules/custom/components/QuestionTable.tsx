import {
  Box,
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

interface ArrayItem {
  number: number;
  question: string;
}

export function QuestionTable() {
  const array: Array<ArrayItem> = Array.from({ length: 45 }, (_, index) => ({
    number: index + 1,
    question: `Question ${index + 1}`,
  }));

  const firstHalf = array.slice(0, 22);
  const secondHalf = array.slice(22, 45);

  return (
    <Grid container>
      <Grid item xs={6}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={10} sx={{ borderRight: "1px solid #ccc" }}>
                  Felt nr.
                </TableCell>
                <TableCell width={90}>Spørgsmål/regel</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {firstHalf.map((row) => (
                <TableRow key={row.number}>
                  <TableCell sx={{ borderRight: "1px solid #ccc" }}>
                    {row.number}
                  </TableCell>
                  <TableCell>{row.question}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={6}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={10} sx={{ borderRight: "1px solid #ccc" }}>
                  Felt nummer
                </TableCell>
                <TableCell width={90}>Spørgsmål/regel</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {secondHalf.map((row) => (
                <TableRow key={row.number}>
                  <TableCell sx={{ borderRight: "1px solid #ccc" }}>
                    {row.number}
                  </TableCell>
                  <TableCell>{row.question}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
}
