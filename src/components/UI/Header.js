import logo from "../../assets/investment-calculator-logo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <h1>投资计算</h1>
    </header>
  );
};

export default Header;
