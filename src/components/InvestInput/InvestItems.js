import styles from "./InvestItems.module.css";

const InvestItems = ({ items, getInputsInfo, inputs }) => {
  const returnValueHandler = (e) => {
    getInputsInfo({ [e.target.id]: +e.target.value });
  };
  return (
    <div className={styles["input-group"]}>
      {items.map((item) => {
        console.log(inputs[item.id]);
        return (
          <p key={item.id}>
            <label htmlFor={item.id}>{item.text}</label>
            <input
              value={inputs[item.id]}
              onChange={returnValueHandler}
              type="number"
              min="0"
              id={item.id}
            />
          </p>
        );
      })}
    </div>
  );
};

export default InvestItems;
