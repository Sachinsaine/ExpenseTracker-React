import Dialog from "@mui/material/Dialog";
import { Button, DialogActions } from "@mui/material";
import styles from "./UpdateDialog.module.css";
import React, { useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

let intialFormData = {
  title: "",
  amount: "",
  category: "",
  date: "",
};

export const UpdateDialog = () => {
  const {
    updateDialog,
    setUpdateDialog,
    selectedExpense,
    setSelectedExpense,
    dispatch,
  } = React.useContext(ExpenseContext);
  const [formData, setFormData] = useState(intialFormData);

  const handleUpdateDialogClose = () => {
    setUpdateDialog(false);
    setSelectedExpense(null);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitUpdatedData = () => {
    if (selectedExpense) {
      dispatch({ type: "UPDATE_EXPENSE", payload: formData });
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: { ...formData } });
    }
    handleUpdateDialogClose();
  };

  useEffect(() => {
    if (selectedExpense) {
      setFormData(selectedExpense);
    } else {
      setFormData(intialFormData);
    }
  }, [selectedExpense, updateDialog]);

  return (
    <div className={styles.mainCont}>
      <Dialog
        open={updateDialog}
        onClose={handleUpdateDialogClose}
        fullWidth
        maxWidth="sm"
      >
        <div style={{ padding: "20px", borderBottom: "1px solid gray" }}>
          Update Expense
        </div>
        <form action="">
          <div className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="" className={styles.label}>
                Category
              </label>
              <select
                name=""
                id=""
                className={styles.input}
                name="category"
                value={formData.category}
                onChange={handleOnChange}
              >
                <option value="Select Category">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Housing">Housing</option>
                <option value="Utilities">Utilities</option>
                {/* <option value="Entertainment">Entertainment</option> */}
                <option value="Health">Health</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="" className={styles.label}>
                Title
              </label>
              <input
                type="text"
                className={styles.input}
                name="title"
                value={formData.title}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="" className={styles.label}>
                Amount
              </label>
              <input
                type="text"
                className={styles.input}
                name="amount"
                value={formData.amount}
                onChange={handleOnChange}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="" className={styles.label}>
                Date
              </label>
              <input
                type="date"
                className={styles.input}
                name="date"
                value={formData.date}
                onChange={handleOnChange}
              />
            </div>
            <DialogActions className={styles.actions}>
              <Button color="error" onClick={handleUpdateDialogClose}>
                Cancel
              </Button>
              <Button onClick={submitUpdatedData}>Update</Button>
            </DialogActions>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
