import { useState } from "react";

import InvestButton from "./InvestButton";
import InvestItems from "./InvestItems";
// import styles from "./InvestForm.module.css";
import "./InvestForm.css"; //for global

const InvestForm = ({ getFormData }) => {
  const buttons = [
    { text: "重置", type: "reset" },
    { text: "计算", type: "submit" },
  ];
  const inputs = [
    [
      { text: "初始投入 (¥)", id: "current-savings" },
      { text: "年投入 (¥)", id: "yearly-contribution" },
    ],
    [
      { text: "年化率 (%, 每年)", id: "expected-return" },
      { text: "投资年限 (年)", id: "duration" },
    ],
  ];
  const baseInputs = {
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
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
