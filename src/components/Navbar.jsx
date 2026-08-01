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

        <nav className={styles.center}>
          <div className={styles.links}>
            <button className={`${styles.link} ${styles.linkActive}`}>
              Dashboard
            </button>

            <button className={styles.link}>Expenses</button>

            <button className={styles.link}>Reports</button>
          </div>
        </nav>

        <div className={styles.actions}>
          <div className={styles.stat}>
            <span className={styles.statLabel}>This month</span>
            <span
              className={styles.statValue}
            >{`$${Math.floor(total.toFixed(2))}.00`}</span>
          </div>

          <button type="button" className={styles.iconBtn} aria-label="Search">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </button>

          <button className={styles.cta}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>

            <span>New Expense</span>
          </button>
        </div>
      </header>

      <div className={styles.spacer}></div>
    </>
  );
};
