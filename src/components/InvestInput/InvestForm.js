import InvestButton from "./InvestButton";
import InvestItems from "./InvestItems";
import styles from "./InvestForm.module.css";

const InvestForm = () => {
  const buttons = [
    { text: "Reset", type: "reset" },
    { text: "Calculate", type: "submit" },
  ];
  const inputs = [
    [
      { text: "Current Savings ($)", id: "current-savings" },
      { text: "Yearly Savings ($)", id: "yearly-contribution" },
    ],
    [
      { text: "Expected Interest (%, per year)", id: "expected-return" },
      { text: "Investment Duration (years)", id: "duration" },
    ],
  ];
  return (
    <form className={styles.form}>
      {inputs.map((items, index) => (
        <InvestItems key={index} items={items} />
      ))}
      <InvestButton buttons={buttons} />
    </form>
  );
};

export default InvestForm;
