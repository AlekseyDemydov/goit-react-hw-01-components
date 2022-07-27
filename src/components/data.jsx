import propTypes from "prop-types";
import styles from "../css/data.module.css";
function DataCard(props) {
  const cardList = props.dataUp.map((oneIt) => (
    <li className={styles.item} key={oneIt.id}>
      <span className={styles.label}>{oneIt.label}</span>
      <span className={styles.percentage}>{oneIt.percentage.toString()} %</span>
    </li>
  ));
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>{cardList}</ul>
    </section>
  );
}

DataCard.propTypes = {
  id: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
};

export default DataCard;
