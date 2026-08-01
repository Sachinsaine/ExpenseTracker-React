import * as React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { ExpenseContext } from "../context/ExpenseContext";

export default function AlertDialog() {
  const { open, setOpen, dispatch, deleteId } =
    React.useContext(ExpenseContext);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    (dispatch({
      type: "REMOVE_EXPENSE",
      payload: deleteId,
    }),
      setOpen(false));
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Delete Expense</DialogTitle>

      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this expense?
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button color="error" onClick={handleAgree}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
