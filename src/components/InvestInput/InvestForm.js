import Button from "../UI/Button";

import styles from "./InvestForm.module.css";

const InvestForm = () => {
  const buttons = [
    { text: "Reset", type: "reset" },
    { text: "Calculate", type: "submit" },
  ];
  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" />
        </p>
      </div>
      <p className={styles.actions}>
        {buttons.map((item) => (
          <Button text={item.text} type={item.text} />
        ))}
      </p>
    </form>
  );
};

export default InvestForm;
