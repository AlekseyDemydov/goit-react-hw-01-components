import { Profile } from "./profile/profile";
import user from "../data/profile.json";

import Statistics from "./statistics/statistics";
import stats from "../data/statistics.json";

import FriendsCard from "./friends/friends";
import dataFr from "../data/friends.json";

import HistoryCard from "./history/history";
import transactions from "../data/history.json";

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsCard dataFr={dataFr} />
      <HistoryCard item={transactions} />
    </div>
  );
};
