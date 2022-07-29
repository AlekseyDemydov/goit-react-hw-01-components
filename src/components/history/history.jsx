import propTypes from "prop-types";
import styles from "./history.module.css";
function HistoryCard({ item }) {
  const historyList = item.map((oneHist) => (
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
HistoryCard.propTypes = {
  id: propTypes.string,
  type: propTypes.string,
  amount: propTypes.string,
  currency: propTypes.string,
};

export default HistoryCard;
