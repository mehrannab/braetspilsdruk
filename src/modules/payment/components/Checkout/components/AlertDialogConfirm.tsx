import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import ErrorIcon from "@mui/icons-material/Error";

export default function AlertDialogConfirm() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          <ErrorIcon fontSize="medium" color="warning" />{" "}
          {"Fejl til serveren i øjeblikket"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" color="black">
            Beklager, men der opstod en fejl under behandlingen af din ordre. Vi
            anbefaler, at du prøver at placere din ordre igen for at se om den
            kan komme igennem.
            <br />
            <br /> Hvis problemet fortsætter, bedes du venligst kontakte os via
            e-mail på test@hotmail.com og give os detaljer om din ordre, så vi
            kan hjælpe dig med at løse problemet. Vi beklager ulejligheden og
            tak for din tålmodighed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose} color="warning">
            Forstået
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
