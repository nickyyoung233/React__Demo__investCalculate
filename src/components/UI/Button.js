import styles from "./Button.module.css";

const Button = ({ text, type }) => {
  return (
    <button
      type={type}
      className={type === "submit" ? styles.buttonAlt : styles.button}
    >
      {text}
    </button>
  );
};
export default Button;
