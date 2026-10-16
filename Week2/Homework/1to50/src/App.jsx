import { useState } from "react";
import GameScreen from "./pages/game/GameScreen";
import RankingScreen from "./pages/ranking/RankingScreen";
import Header from "./components/header/Header";

function App() {
  const [tab, setTab] = useState("game");
  const [level, setLevel] = useState(1);

  return (
    <div>
      <Header
        tab={tab}
        onChangeTab={setTab}
        level={level}
        onChangeLevel={setLevel}
      />
      <main>{tab === "game" ? <GameScreen /> : <RankingScreen />}</main>
    </div>
  );
}

export default App;
