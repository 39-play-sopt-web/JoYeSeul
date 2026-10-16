import { useReducer } from "react";

const range = (from, n) => Array.from({ length: n }, (_, i) => from + i);

const shuffle = (array) => {
  const result = [...array];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};

const initGame = (size) => {
  const half = size * size;
  const front = shuffle(range(1, half));
  const back = shuffle(range(half + 1, half));

  return {
    board: front,
    queue: back,
    size: size,
    next: 1,
  };
};

function reducer(state, action) {
  switch (action.type) {
    case "click": {
      const index = action.index;
      const clickedNumber = state.board[index];

      if (clickedNumber === state.next) {
        const board = [...state.board];
        const queue = [...state.queue];
        board[index] = queue.shift() ?? null;

        return {
          ...state,
          board: board,
          queue: queue,
          next: state.next + 1,
        };
      }

      return state;
    }
    case "reset":
      return initGame(state.size);
    default:
      return state;
  }
}

export const useGame = (level) => {
  const size = level + 2;
  const total = size * size * 2;
  const [state, dispatch] = useReducer(reducer, size, initGame);
  const isFinished = state.next > size * size * 2;

  return {
    size: size,
    total: total,
    board: state.board,
    next: state.next,
    isFinished: isFinished,
    click: (index) => dispatch({ type: "click", index: index }),
    reset: () => dispatch({ type: "reset" }),
  };
};
