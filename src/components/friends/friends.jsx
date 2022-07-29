import styles from "./friends.module.css";
import FriendsItem from "./friendsItem";

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
