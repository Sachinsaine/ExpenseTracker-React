import { useContext, useMemo } from "react";
import styles from "./ExpenseSummary.module.css";
import { ExpenseContext } from "../context/ExpenseContext";

export const ExpenseSummary = () => {
  const { state } = useContext(ExpenseContext);

  const total = useMemo(() => {
    return state.allExpenses.reduce(
      (sum, expense) => sum + Number(expense.amount),
      0,
    );
  }, [state.allExpenses]);

  const utilities = state.allExpenses.filter(
    (item) => item.category === "Utilities",
  );

  const utilitiesAmount = utilities.reduce(
    (sum, total) => sum + Number(total.amount),
    0,
  );

  const food = state.allExpenses.filter((item) => item.category === "Food");
  const foodAmount = food.reduce((sum, total) => sum + Number(total.amount), 0);

  const transport = state.allExpenses.filter(
    (item) => item.category === "Transport",
  );
  const transportAmount = transport.reduce(
    (sum, total) => sum + Number(total.amount),
    0,
  );

  const housing = state.allExpenses.filter(
    (item) => item.category === "Housing",
  );
  const housingAmount = housing.reduce(
    (sum, total) => sum + Number(total.amount),
    0,
  );

  const shopping = state.allExpenses.filter(
    (item) => item.category === "Shopping",
  );
  const shoppingAmount = shopping.reduce(
    (sum, total) => sum + Number(total.amount),
    0,
  );

  const health = state.allExpenses.filter((item) => item.category === "Health");
  const healthAmount = health.reduce(
    (sum, total) => sum + Number(total.amount),
    0,
  );

  const utilitiesPercentage = total === 0 ? 0 : (utilitiesAmount / total) * 100;
  const foodPercentage = total === 0 ? 0 : (foodAmount / total) * 100;

  const transportPercentage = total === 0 ? 0 : (transportAmount / total) * 100;

  const housingPercentage = total === 0 ? 0 : (housingAmount / total) * 100;

  const shoppingPercentage = total === 0 ? 0 : (shoppingAmount / total) * 100;

  const healthPercentage = total === 0 ? 0 : (healthAmount / total) * 100;

  const entries = state.allExpenses.length;

  return (
    <div className={styles.card}>
      <div className={styles.headline}>
        <span className={styles.eyebrow}>Total spent</span>
        <span className={styles.total}>{`USD$${total.toFixed(2)}`} </span>
        <span className={styles.count}>{entries} entries</span>
      </div>

      <div className={styles.breakdown}>
        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Utilities</span>
            <span>{`USD$${utilitiesAmount.toFixed(2)}`} </span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barGold}`}
              style={{ width: `${utilitiesPercentage}%` }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Food</span>
            <span>{`USD$${foodAmount.toFixed(2)}`} </span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barRust}`}
              style={{ width: `${foodPercentage}%` }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Transport</span>
            <span>{`USD$${transportAmount.toFixed(2)}`}</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barSlate}`}
              style={{ width: `${transportPercentage}%` }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Housing</span>
            <span>{`USD$${housingAmount.toFixed(2)}`}</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barHousing}`}
              style={{ width: `${housingPercentage}%` }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Shopping</span>
            <span>{`USD$${shoppingAmount.toFixed(2)}`}</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barDarkPink}`}
              style={{ width: `${shoppingPercentage}%` }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Health</span>
            <span>{`USD$${healthAmount.toFixed(2)}`}</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barGreen}`}
              style={{ width: `${healthPercentage}%` }}
            />
          </div>
        </div>
      </div>

      <p className={styles.note}>
        Biggest category: <strong>Utilities</strong> at US$72.50
      </p>
    </div>
  );
};
