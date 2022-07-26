function DataCard(props) {
  const cardList = props.dataUp.map((oneIt) => (
    <li className="item" key={oneIt.id}>
      <span className="label">{oneIt.label}</span>
      <span className="percentage">{oneIt.percentage.toString()} %</span>
    </li>
  ));
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">{cardList}</ul>
    </section>
  );
}

export default DataCard;
