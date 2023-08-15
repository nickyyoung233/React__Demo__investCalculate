import ResultItem from "./ResultItem";

import styles from "./ResultList.module.css";

const ResultList = ({ infos }) => {
  let isCalculated = true;
  const yearlyData = []; // per-year results
  const calculateHandler = (userInput) => {
    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];
    let totalYearlyInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const totalSaving = (
        currentSavings +
        yearlyContribution * (i + 1)
      ).toFixed(4);
      const yearlyInterest = totalSaving * expectedReturn;
      totalYearlyInterest += yearlyInterest;
      currentSavings += yearlyInterest;
      yearlyData.push({
        year: i + 1,
        totalSaving: totalSaving,
        yearlyInterest: yearlyInterest.toFixed(4),
        totalYearlyInterest: totalYearlyInterest.toFixed(4),
        savingsEndOfYear: currentSavings.toFixed(4),
        yearlyContribution: yearlyContribution,
      });
    }
  };
  console.log(infos);
  if (
    infos == null ||
    infos["current-savings"] === "" ||
    infos["expected-return"] === "" ||
    infos["yearly-contribution"] === "" ||
    infos.duration === ""
  )
    isCalculated = false;
  else calculateHandler(infos);

  for (const prop in infos) {
    if (infos[prop] === 0) {
      isCalculated = false;
      break;
    }
  }

  let baseList = (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>年份</th>
          <th>总投入</th>
          <th>利息 (年)</th>
          <th>总利息</th>
          <th>总资本</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((item) => (
          <ResultItem key={item.year} item={item} />
        ))}
      </tbody>
    </table>
  );
  if (!isCalculated)
    baseList = (
      <table className={styles.result}>
        <thead>
          <tr>
            <td>请输入投资信息</td>
          </tr>
        </thead>
      </table>
    );
  return baseList;
};
export default ResultList;
