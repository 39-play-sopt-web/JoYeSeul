import { useGame } from "../../hooks/useGame";

function GameScreen({ level }) {
  const { size, total, board, next, isFinished, click } = useGame(level);

  return (
    <section>
      <h2>
        {isFinished ? (
          "성공!"
        ) : (
          <>
            다음 숫자 <span>{next}</span> ({next}/{total})
          </>
        )}
      </h2>

      <div>
        {board.map((num, index) => (
          <button
            key={index}
            type="button"
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
