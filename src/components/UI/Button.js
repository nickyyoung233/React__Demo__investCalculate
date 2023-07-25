import styles from "./Button.module.css";

const Button = ({ text, type, clickHandler }) => {
  return (
    <button
      onClick={clickHandler}
      type={type}
      className={type === "submit" ? styles.button : styles.buttonAlt}
    >
      {text}
    </button>
  );
};
export default Button;
