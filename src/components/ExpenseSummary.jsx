import styles from "./ExpenseSummary.module.css";

export const ExpenseSummary = () => {
  return (
    <div className={styles.card}>
      <div className={styles.headline}>
        <span className={styles.eyebrow}>Total spent</span>
        <span className={styles.total}>US$156.70</span>
        <span className={styles.count}>3 entries</span>
      </div>

      <div className={styles.breakdown}>
        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Utilities</span>
            <span>US$72.50</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barGold}`}
              style={{ width: "46%" }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Food</span>
            <span>US$54.20</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barRust}`}
              style={{ width: "35%" }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.rowLabels}>
            <span>Transport</span>
            <span>US$30.00</span>
          </div>
          <div className={styles.barTrack}>
            <div
              className={`${styles.barFill} ${styles.barSlate}`}
              style={{ width: "19%" }}
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
