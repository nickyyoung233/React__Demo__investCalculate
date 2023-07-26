const ResultItem = ({ item }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "RMB",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return (
    <tr>
      <td>{item.year}</td>
      <td>{formatter.format(item.totalSaving)}</td>
      <td>{formatter.format(item.yearlyInterest)}</td>
      <td>{formatter.format(item.totalYearlyInterest)}</td>
      <td>{formatter.format(+item.totalSaving + +item.yearlyInterest)}</td>
    </tr>
  );
};
export default ResultItem;
