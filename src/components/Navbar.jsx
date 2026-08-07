import { useContext } from "react";
import styles from "./Navabar.module.css";
import { ExpenseContext } from "../context/ExpenseContext";
export const Navbar = () => {
  const { state } = useContext(ExpenseContext);

  let total = state.allExpenses.reduce(
    (curr, item) => curr + Number(item.amount),
    0,
  );

  return (
    <>
      <header className={styles.navbar}>
        <a href="#" className={styles.brand}>
          <div className={styles.mark} aria-hidden="true">
            <span className={styles.markLine}></span>
            <span className={styles.markLine}></span>
            <span className={styles.markLine}></span>
          </div>

          <div className={styles.titles}>
            <h1 className={styles.title}>Ledger</h1>
            <p className={styles.subtitle}>Every entry, accounted for</p>
          </div>
        </a>

        <div className={styles.actions}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>This month</span>
            <span
              className={styles.statValue}
            >{`USD$${total.toFixed(2)}`}</span>
          </div>
        </div>
      </header>

      <div className={styles.spacer}></div>
    </>
  );
};
