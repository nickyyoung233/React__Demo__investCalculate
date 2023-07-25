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
      { text: "Current Savings ($)", id: "current-savings" },
      { text: "Yearly Savings ($)", id: "yearly-contribution" },
    ],
    [
      { text: "Expected Interest (%, per year)", id: "expected-return" },
      { text: "Investment Duration (years)", id: "duration" },
    ],
  ];

  //getInputs
  const [inputsInfo, setInputsInfo] = useState({
    "current-savings": 0,
    "yearly-contribution": 0,
    "expected-return": 0,
    duration: 0,
  });
  const getInputsInfo = (infos) => {
    setInputsInfo((prevInputsInfo) => {
      return { ...prevInputsInfo, ...infos };
    });
  };
  //sendInputs
  const trigglerButton = (e) => {
    console.log(e.target.type);
    if (e.target.type === "submit") {
      e.preventDefault();
    } else if (e.target.type === "reset") {
      setInputsInfo({
        "current-savings": 0,
        "yearly-contribution": 0,
        "expected-return": 0,
        duration: 0,
      });
    }
    console.log(inputsInfo);
    getFormData(inputsInfo);
  };

  return (
    <form className="form">
      {inputs.map((items, index) => (
        <InvestItems getInputsInfo={getInputsInfo} key={index} items={items} />
      ))}
      <InvestButton trigglerButton={trigglerButton} buttons={buttons} />
    </form>
  );
};

export default InvestForm;
