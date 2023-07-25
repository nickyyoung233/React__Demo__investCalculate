import Button from "../UI/Button";

import styles from "./InvestButton.module.css";

const InvestButton = ({ buttons, trigglerButton, inputsInfo }) => {
  // const clickHandler = (e) => {
  //   if (e.target.type === "submit") {
  //     e.preventDefault();
  //     getFormData(inputsInfo);
  //   }
  // };
  return (
    <p className={styles.actions}>
      {buttons.map((item) => (
        <Button
          clickHandler={trigglerButton}
          key={item.text}
          text={item.text}
          type={item.type}
        />
      ))}
    </p>
  );
};
export default InvestButton;
