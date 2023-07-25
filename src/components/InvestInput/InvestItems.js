import styles from "./InvestItems.module.css";

const InvestItems = ({ items, getInputsInfo }) => {
  const returnValueHandler = (e) => {
    getInputsInfo({ [e.target.id]: +e.target.value });
  };
  return (
    <div className={styles["input-group"]}>
      {items.map((item) => {
        return (
          <p key={item.id}>
            <label htmlFor={item.id}>{item.text}</label>
            <input onChange={returnValueHandler} type="number" id={item.id} />
          </p>
        );
      })}
    </div>
  );
};

export default InvestItems;
