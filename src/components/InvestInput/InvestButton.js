import Button from "../UI/Button";

import styles from "./InvestButton.module.css";

const InvestButton = ({ buttons }) => {
  return (
    <p className={styles.actions}>
      {buttons.map((item) => (
        <Button key={item.text} text={item.text} type={item.type} />
      ))}
    </p>
  );
};
export default InvestButton;
