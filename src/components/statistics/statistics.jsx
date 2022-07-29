import propTypes from "prop-types";
import styles from "./statistics.module.css";
function Statistics({ stats, title }) {
  const cardList = stats.map((oneIt) => (
    <li className={styles.item} key={oneIt.id}>
      <span className={styles.label}>{oneIt.label}</span>
      <span className={styles.percentage}>{oneIt.percentage.toString()} %</span>
    </li>
  ));
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>

      <ul className={styles.statList}>{cardList}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: propTypes.string,
  id: propTypes.string,
  label: propTypes.string,
  percentage: propTypes.number,
};

export default Statistics;
