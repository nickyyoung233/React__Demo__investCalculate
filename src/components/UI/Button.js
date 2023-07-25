import styles from "./Button.module.css";

const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className={type === "submit" ? styles.button : styles.buttonAlt}
    >
      {text}
    </button>
  );
};
export default Button;
