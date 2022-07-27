import styles from "./prof.module.css";
export const User = (props) => {
  const { userData } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={userData.avatar}
          alt="User avatar"
          className={styles.avatar}
          width="150"
        />
        <p className={styles.name}>{userData.username}</p>
        <p className={styles.tag}>@{userData.tag}</p>
        <p className={styles.location}>{userData.location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{userData.stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{userData.stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
