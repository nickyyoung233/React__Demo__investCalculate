const ResultItem = ({ item }) => {
  // savingsEndOfYear: 2.01year: 1yearlyContribution: 1yearlyInterest: 0.01
  return (
    <tr>
      <td>{item.year}</td>
      <td>{item.totalSaving}</td>
      <td>{item.yearlyInterest}</td>
      <td>{item.totalYearlyInterest}</td>
      <td>{(+item.totalSaving + +item.yearlyInterest).toFixed(4)}</td>
    </tr>
  );
};
export default ResultItem;
