import { useState } from "react";
import { clearRecords, getRecords } from "../../utils/record";
import * as styles from "./rankingScreen.css.js";

function RankingScreen() {
  const [records, setRecords] = useState(() =>
    getRecords().sort((a, b) => b.level - a.level || a.time - b.time),
  );

  const handleReset = () => {
    clearRecords();
    setRecords([]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.topBar}>
        <h2 className={styles.title}>🏆 랭킹</h2>
        <button
          type="button"
          className={styles.resetButton}
          onClick={handleReset}
        >
          초기화
        </button>
      </div>

      {records.length === 0 ? (
        <p className={styles.empty}>
          아직 기록이 없어요. 게임을 플레이해보세요!
        </p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>순위</th>
              <th className={styles.th}>레벨</th>
              <th className={styles.th}>플레이 시간</th>
              <th className={styles.th}>기록 시각</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={record.timestamp}>
                <td className={styles.td}>{index + 1}</td>
                <td className={styles.td}>{`Level ${record.level}`}</td>
                <td className={styles.td}>{record.time.toFixed(2)}초</td>
                <td className={styles.td}>
                  {new Date(record.timestamp).toLocaleString("ko-KR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default RankingScreen;
