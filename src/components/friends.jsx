import styles from "../css/friends.module.css";
import FriendsItem from "./part/friendsItem";

const FriendsCard = (props) => {
  const { dataFr } = props;
  return (
    <ul className={styles.friendList}>
      {dataFr.map((el) => (
        <FriendsItem key={el.id} {...el} />
      ))}
    </ul>
  );
};
export default FriendsCard;
