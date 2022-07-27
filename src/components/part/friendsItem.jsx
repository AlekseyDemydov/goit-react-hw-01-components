import styles from "../../css/friends.module.css";
import propTypes from "prop-types";
const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <span className={styles.status}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
FriendsItem.propTypes = {
  avatar: propTypes.string,
  name: propTypes.string,
  isOnline: propTypes.bool,
};
export default FriendsItem;
