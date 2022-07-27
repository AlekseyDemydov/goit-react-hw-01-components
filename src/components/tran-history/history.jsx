import styles from "./history.module.css";
function HistoryCard(props) {
  const historyList = props.dataHist.map((oneHist) => (
    <tr key={oneHist.id}>
      <td>{oneHist.type}</td>
      <td>{oneHist.amount}</td>
      <td>{oneHist.currency}</td>
    </tr>
  ));
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{historyList}</tbody>
    </table>
  );
}

export default HistoryCard;
