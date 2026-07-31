import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import styles from "./ExpenseList.module.css";

export const ExpenseList = () => {
  const { state } = useContext(ExpenseContext);
  console.log(state.allExpenses);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.heading}>Entries</h2>
        <div className={styles.filters}>
          <label className={styles.filterField}>
            <span>Category</span>
            <select>
              <option>All</option>
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
              <button type="button" className={styles.delete}>
                ✕
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
