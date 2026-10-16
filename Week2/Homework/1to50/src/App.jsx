import { useState } from "react";
import * as styles from "./App.css.js";
import GameScreen from "./pages/game/GameScreen";
import RankingScreen from "./pages/ranking/RankingScreen";
import Header from "./components/header/Header";

function App() {
  const [tab, setTab] = useState("game");
  const [level, setLevel] = useState(1);

  return (
    <div className={styles.layout}>
      <Header
        tab={tab}
        onChangeTab={setTab}
        level={level}
        onChangeLevel={setLevel}
      />
      <main className={styles.main}>
        {tab === "game" ? (
          <GameScreen key={level} level={level} />
        ) : (
          <RankingScreen />
        )}
      </main>
    </div>
  );
}

export default App;
