import Dialog from "@mui/material/Dialog";
import React, { useEffect, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import { Button, DialogActions } from "@mui/material";
import styles from "./UpdateDialog.module.css";

const initialFormData = {
  title: "",
  amount: "",
  category: "",
  date: "",
};

export const UpdateDialog = () => {
  const { updateDialog, updateExpense, setUpdateDialog, dispatch } =
    React.useContext(ExpenseContext);
  const [formData, setFormData] = useState(initialFormData);
  const handleClose = () => {
    setUpdateDialog(false);
  };

  const handleUpdate = () => {
    if (updateExpense) {
      dispatch({ type: "UPDATE_EXPENSE", payload: formData });
    } else {
      dispatch({ type: "ADD_EXPENSE", payload: { ...formData } });
    }
  };

  useEffect(() => {
    if (updateExpense) {
      setFormData(updateExpense);
    } else {
      setFormData(initialFormData);
    }
  }, [updateExpense, updateDialog]);
  return (
    <div className={styles.mainCont}>
      <Dialog open={updateDialog} PaperProps={{ className: styles.paper }}>
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
                onChange={handleUpdate}
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
                onChange={handleUpdate}
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
                onChange={handleUpdate}
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
                onChange={handleUpdate}
              />
            </div>
            <DialogActions className={styles.actions}>
              <Button color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button>Update</Button>
            </DialogActions>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
