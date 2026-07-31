import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import styles from "./ExpenseList.module.css";
import toast from "react-hot-toast";

export const ExpenseList = () => {
  const { state, dispatch } = useContext(ExpenseContext);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Entries</h2>
        <div className={styles.filters}>
          <label className={styles.filterField}>
            <span>Category</span>
            <select
              onChange={(e) =>
                dispatch({
                  type: "SELECT_BY_CATEGORY",
                  payload: e.target.value,
                })
              }
            >
              <option value="All">All</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Housing">Housing</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Health">Health</option>
              <option value="Shopping">Shopping</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className={styles.filterField}>
            <span>Sort</span>
            <select>
              <option>Newest first</option>
            </select>
          </label>
        </div>
      </div>

      <div className={styles.columns}>
        <span>Category</span>
        <span>Title</span>
        <span>Date</span>
        <span>Amount</span>
        <span></span>
      </div>

      <ul className={styles.items}>
        {state.allExpenses.map((item) => {
          return (
            <li className={styles.item}>
              <span className={styles.category} data-category={item.category}>
                {item.category}
              </span>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.date}>{item.date}</div>
              <div className={styles.amount}>{item.amount}</div>
              <button
                type="button"
                className={styles.delete}
                onClick={() =>
                  dispatch(
                    { type: "REMOVE_EXPENSE", payload: item.id },
                    toast.error("Ledger has been removed."),
                  )
                }
              >
                ✕
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
