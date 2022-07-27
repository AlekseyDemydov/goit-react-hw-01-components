import styles from "./friends.module.css";
function FriendsCard(props) {
  const friendList = props.dataFr.map((oneFr) => (
    <li className={styles.item} key={oneFr.id}>
      <span className={styles.status}>{oneFr.isOnline}</span>
      <img
        className={styles.avatar}
        src={oneFr.avatar}
        alt={oneFr.name}
        width="48"
      />
      <p className={styles.name}>{oneFr.name}</p>
    </li>
  ));
  return <ul className={styles.friendList}>{friendList}</ul>;
}

export default FriendsCard;
