import styles from "./InvestItems.module.css";

const InvestItems = ({ items }) => {
  return (
    <div className={styles["input-group"]}>
      {items.map((item) => {
        return (
          <p key={item.id}>
            <label htmlFor={item.id}>{item.text}</label>
            <input type="number" id={item.id} />
          </p>
        );
      })}
    </div>
  );
};

export default InvestItems;
