import { User } from "./prof";
import userData from "../data/prof.json";

import DataCard from "./data";
import dataUp from "../data/data.json";

import FriendsCard from "./friends";
import dataFr from "../data/friends.json";

import HistoryCard from "./history";
import dataHist from "../data/history.json";

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
