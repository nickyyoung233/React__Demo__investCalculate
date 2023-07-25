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

  if (infos == null) isCalculated = false;
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
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((item) => (
          <ResultItem key={item.year} item={item} />
        ))}
      </tbody>
    </table>
  );
  console.log(isCalculated);
  if (!isCalculated)
    baseList = (
      <table className={styles.result}>
        <thead>
          <tr>
            <td>Please Input Your Investment</td>
          </tr>
        </thead>
      </table>
    );
  return baseList;
};
export default ResultList;
