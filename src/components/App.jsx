import { User } from "../components/prof/user-card";
import userData from "./prof/user.json";

import DataCard from "./up-data/data-card";
import dataUp from "./up-data/data.json";

import FriendsCard from "./friends/list-friends";
import dataFr from "./friends/friends.json";

import HistoryCard from "./tran-history/history";
import dataHist from "./tran-history/transactions.json";

export const App = () => {
  return (
    <div>
      <User userData={userData} />
      <DataCard dataUp={dataUp} />
      <FriendsCard dataFr={dataFr} />
      <HistoryCard dataHist={dataHist} />
    </div>
  );
};
