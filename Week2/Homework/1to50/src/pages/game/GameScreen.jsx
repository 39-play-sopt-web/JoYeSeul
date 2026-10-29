import { useGame } from "../../hooks/useGame";
import * as styles from "./gameScreen.css.js";

function GameScreen({ level, onStart, onFinish }) {
  const { size, total, board, next, isFinished, click } = useGame(level, {
    onStart,
    onFinish,
  });

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
        {isFinished ? (
          "성공!"
        ) : (
          <>
            다음 숫자 <span className={styles.nextNumber}>{next}</span> ({next}/
            {total})
          </>
        )}
      </h2>

      <div className={styles.board({ size })}>
        {board.map((num, index) => (
          <button
            key={index}
            type="button"
            className={styles.number}
            disabled={isFinished || num === null}
            onClick={() => click(index)}
          >
            {num}
          </button>
        ))}
      </div>
    </section>
  );
}

export default GameScreen;
