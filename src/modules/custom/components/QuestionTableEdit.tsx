import { Box, Button, Grid, styled } from "@mui/material";
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowsProp,
} from "@mui/x-data-grid";
import clsx from "clsx";
import React, { useEffect, useState } from "react";

const DataGridCustom = styled(DataGrid)`
  .MuiSvgIcon-root {
    width: 0em;
    height: 0em;
  }
`;

const gridItemStyles = {
  "& .number-column": {
    backgroundColor: "#FF6F3A",
    pointerEvents: "none",
  },
  "& .questionRule-column.negative": {
    backgroundColor: "white",
    color: "white",
    fontWeight: "600",
  },
  "& .questionRule-column.positive": {
    backgroundColor: "#4CAF50",
    fontWeight: "600",
  },
  "& .header": {
    backgroundColor: "#FF6F3A",
  },
};

export function QuestionTableEdit() {
  const [allRows, setAllRows] = useState<GridRowsProp>([]);
  const [editedCellValue, setEditedCellValue] = useState<string | number>("");
  const handleGetData = () => {
    console.log(allRows);
  };

  useEffect(() => {
    setAllRows([...rowsFirst, ...rowsSecond]);
  }, []);

  // Function to handle cell edit start
  const handleCellEditStart = (params: GridEditCellPropsParams) => {
    console.log("Cell edit started:", params);
  };

  // Function to handle cell edit stop
  const handleCellEditStop = (params: GridEditCellPropsParams) => {
    console.log("Cell edit stopped:", params);
    const { id, field } = params;
    // Update the edited value in the allRows state
    const updatedRows = allRows.map((row) => {
      if (row.id === id) {
        return { ...row, [field]: editedCellValue };
      }
      return row;
    });
    setAllRows(updatedRows);
    setEditedCellValue(params.value);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sx={gridItemStyles}>
        <DataGridCustom
          rows={rowsFirst}
          columns={columnsFirst}
          hideFooterPagination
          hideFooterSelectedRowCount
          hideFooter
          onCellEditStart={handleCellEditStart}
          onCellEditStop={handleCellEditStop}
          sx={{
            boxShadow: 6,
            border: 3,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              backgroundColor: "#00FF33",
            },
            "& .MuiDataGrid-cell:selected": {
              backgroundColor: "#00FF33",
              border: 10,
            },
          }}
        />
      </Grid>
      <Grid item xs={6} sx={gridItemStyles}>
        <DataGridCustom
          rows={rowsSecond}
          columns={columnsSecond}
          hideFooterPagination
          hideFooterSelectedRowCount
          hideFooter
          onCellEditStart={handleCellEditStart}
          onCellEditStop={handleCellEditStop}
          sx={{
            boxShadow: 6,
            border: 3,
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              backgroundColor: "#00FF33",
            },
            "& .MuiDataGrid-cell:selected": {
              backgroundColor: "#00FF33",
              border: 10,
            },
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleGetData}>
          Get Data
        </Button>
      </Grid>
    </Grid>
  );
}

const columnsFirst: GridColDef[] = [
  {
    field: "fieldNumber",
    headerName: "Felt nr.",
    editable: false,
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
    cellClassName: "number-column",
    headerClassName: "header",
    headerAlign: "center",
  },
  {
    field: "questionOrRule",
    headerName: "Spørgsmål/Regel",
    editable: true,
    disableColumnMenu: true,
    sortable: false,
    flex: 6,
    headerClassName: "header",
    headerAlign: "center",
    cellClassName: (params: GridCellParams<any>) =>
      clsx("questionRule-column", {
        negative: params.value === "",
        positive: params.value != "",
      }),
  },
];

const columnsSecond: GridColDef[] = [
  {
    field: "fieldNumber",
    headerName: "Felt nr.",
    editable: false,
    disableColumnMenu: true,
    sortable: false,
    flex: 1,
    cellClassName: "number-column",
    headerClassName: "header",
    headerAlign: "center",
  },
  {
    field: "questionOrRule",
    headerName: "Spørgsmål/Regel",
    editable: true,
    disableColumnMenu: true,
    sortable: false,
    flex: 6,
    headerClassName: "header",
    headerAlign: "center",
    cellClassName: (params: GridCellParams<any>) =>
      clsx("questionRule-column", {
        negative: params.value === "",
        positive: params.value != "",
      }),
  },
];

const rowsFirst: GridRowsProp = [
  {
    id: 1,
    fieldNumber: 1,
    questionOrRule: "Spørgsmål 1",
  },
  {
    id: 2,
    fieldNumber: 2,
    questionOrRule: "Spørgsmål 2",
  },
  {
    id: 3,
    fieldNumber: 3,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 4,
    fieldNumber: 4,
    questionOrRule: "Spørgsmål 4",
  },
  {
    id: 5,
    fieldNumber: 5,
    questionOrRule: "Spørgsmål 5",
  },
  {
    id: 6,
    fieldNumber: 6,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 7,
    fieldNumber: 7,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 8,
    fieldNumber: 8,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 9,
    fieldNumber: 9,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 10,
    fieldNumber: 10,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 11,
    fieldNumber: 11,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 12,
    fieldNumber: 12,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 13,
    fieldNumber: 13,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 14,
    fieldNumber: 14,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 15,
    fieldNumber: 15,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 16,
    fieldNumber: 16,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 17,
    fieldNumber: 17,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 18,
    fieldNumber: 18,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 19,
    fieldNumber: 19,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 20,
    fieldNumber: 20,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 21,
    fieldNumber: 21,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 22,
    fieldNumber: 22,
    questionOrRule: "Spørgsmål 3",
  },
];

const rowsSecond: GridRowsProp = [
  {
    id: 23,
    fieldNumber: 23,
    questionOrRule: "Spørgsmål 1",
  },
  {
    id: 24,
    fieldNumber: 24,
    questionOrRule: "Spørgsmål 2",
  },
  {
    id: 25,
    fieldNumber: 25,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 26,
    fieldNumber: 26,
    questionOrRule: "Spørgsmål 4",
  },
  {
    id: 27,
    fieldNumber: 27,
    questionOrRule: "Spørgsmål 5",
  },
  {
    id: 28,
    fieldNumber: 28,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 29,
    fieldNumber: 29,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 30,
    fieldNumber: 30,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 31,
    fieldNumber: 31,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 32,
    fieldNumber: 32,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 33,
    fieldNumber: 33,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 34,
    fieldNumber: 34,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 35,
    fieldNumber: 35,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 36,
    fieldNumber: 36,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 37,
    fieldNumber: 37,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 38,
    fieldNumber: 38,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 39,
    fieldNumber: 39,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 40,
    fieldNumber: 40,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 41,
    fieldNumber: 41,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 42,
    fieldNumber: 42,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 43,
    fieldNumber: 43,
    questionOrRule: "Spørgsmål 3",
  },
  {
    id: 44,
    fieldNumber: 44,
    questionOrRule: "Spørgsmål 3",
  },
];
