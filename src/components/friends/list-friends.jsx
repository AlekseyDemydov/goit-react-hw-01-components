function FriendsCard(props) {
  const friendList = props.dataFr.map((oneFr) => (
    <li className="item" key={oneFr.id}>
      <span className="status">{oneFr.isOnline}</span>
      <img className="avatar" src={oneFr.avatar} alt={oneFr.name} width="48" />
      <p className="name">{oneFr.name}</p>
    </li>
  ));
  return <ul className="friend-list">{friendList}</ul>;
}

export default FriendsCard;
