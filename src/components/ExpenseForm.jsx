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
              <input
                type="text"
                className={styles.input}
                name="category"
                value={state.expense.category}
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
