import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import styles from "./ExpenseForm.module.css";

export const ExpenseForm = () => {
  const { state, dispatch } = useContext(ExpenseContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_EXPENSE",
      payload: { id: Date.now(), ...state.expense },
    });
  };

  return (
    <div className={styles.card}>
      <span className={styles.eyebrow}>New entry</span>
      <h2 className={styles.heading}>Record a spend</h2>

      <form action="">
        <div className={styles.form}>
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="" className={styles.label}>
                Title
              </label>
              <input
                type="text"
                className={styles.input}
                name="title"
                value={state.expense.title}
                placeholder="Enter title"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="" className={styles.label}>
                Amount
              </label>
              <input
                type="number"
                className={styles.input}
                name="amount"
                value={state.expense.amount}
                placeholder="$99.00"
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="" className={styles.label}>
                Category
              </label>
              <select
                className={styles.input}
                name="category"
                value={state.expense.category}
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                id=""
              >
                <option value="Select Category">Select Category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Housing">Housing</option>
                <option value="Utilities">Utilities</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Health">Health</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="" className={styles.label}>
                Date
              </label>
              <input
                type="date"
                className={styles.input}
                name="date"
                value={state.expense.date}
                onChange={(e) =>
                  dispatch({
                    type: "INPUT",
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={Object.values(state.expense).some((input) => !input)}
            className={styles.submit}
            onClick={handleSubmit}
          >
            Add to ledger
          </button>
        </div>
      </form>
    </div>
  );
};
