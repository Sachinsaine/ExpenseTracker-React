import { ExpenseForm } from "./ExpenseForm";
import { Navbar } from "./Navbar";
import styles from "./Dashboard.module.css";
import { ExpenseSummary } from "./ExpenseSummary";
import { ExpenseList } from "./ExpenseList";

export const Dashboard = () => {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.row}>
          <ExpenseForm />
          <ExpenseSummary />
        </div>
      </div>
      <div className={styles.expenseListCont}>
        <ExpenseList />
      </div>
    </div>
  );
};
