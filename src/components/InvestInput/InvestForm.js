import { useState } from "react";

import InvestButton from "./InvestButton";
import InvestItems from "./InvestItems";
// import styles from "./InvestForm.module.css";
import "./InvestForm.css"; //for global

const InvestForm = ({ getFormData }) => {
  const buttons = [
    { text: "Reset", type: "reset" },
    { text: "Calculate", type: "submit" },
  ];
  const inputs = [
    [
      { text: "Current Savings (¥)", id: "current-savings" },
      { text: "Yearly Savings (¥)", id: "yearly-contribution" },
    ],
    [
      { text: "Expected Interest (%, per year)", id: "expected-return" },
      { text: "Investment Duration (years)", id: "duration" },
    ],
  ];
  const baseInputs = {
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  };
  //getInputs
  const [inputsInfo, setInputsInfo] = useState(baseInputs);
  const getInputsInfo = (infos) => {
    setInputsInfo((prevInputsInfo) => {
      return { ...prevInputsInfo, ...infos };
    });
  };
  //sendInputs
  const trigglerButton = (e) => {
    if (e.target.type === "submit") {
      e.preventDefault();
    } else if (e.target.type === "reset") {
      setInputsInfo(baseInputs);
    }
    getFormData(inputsInfo);
  };

  return (
    <form className="form">
      {inputs.map((items, index) => (
        <InvestItems
          getInputsInfo={getInputsInfo}
          key={index}
          items={items}
          inputs={inputsInfo}
        />
      ))}
      <InvestButton trigglerButton={trigglerButton} buttons={buttons} />
    </form>
  );
};

export default InvestForm;
