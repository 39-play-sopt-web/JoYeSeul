import { useState } from "react";
import * as styles from "./App.css.js";
import GameScreen from "./pages/game/GameScreen";
import RankingScreen from "./pages/ranking/RankingScreen";
import Header from "./components/header/Header";
import { useTimer } from "./hooks/useTimer.js";
import Modal from "./components/modal/Modal.jsx";

function App() {
  const [tab, setTab] = useState("game");
  const [level, setLevel] = useState(1);
  const [round, setRound] = useState(0);
  const [record, setRecord] = useState(null);
  const { time, start, stop, reset } = useTimer();

  const handleChangeTab = (newTab) => {
    if (newTab === tab) return;
    setTab(newTab);
    reset();
  };

  const handleChangeLevel = (newLevel) => {
    setLevel(newLevel);
    reset();
  };

  const handleFinish = () => {
    const finalTime = stop();
    setRecord(finalTime);
  };

  const handleConfirm = () => {
    setRecord(null);
    reset();
    setRound((prev) => prev + 1);
  };

  return (
    <div className={styles.layout}>
      <Header
        tab={tab}
        onChangeTab={handleChangeTab}
        level={level}
        onChangeLevel={handleChangeLevel}
        time={time}
      />

      <main className={styles.main}>
        {tab === "game" ? (
          <GameScreen
            key={`${level}-${round}`}
            level={level}
            onStart={start}
            onFinish={handleFinish}
          />
        ) : (
          <RankingScreen />
        )}
      </main>

      <Modal
        isOpen={!!record}
        title={`🎉 Level${level} Clear!`}
        description={`${record?.toFixed(2)}초`}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

export default App;
