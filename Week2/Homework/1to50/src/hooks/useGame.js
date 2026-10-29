import { useReducer } from "react";

const range = (from, count) =>
  Array.from({ length: count }, (_, i) => from + i);

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
    next: 1,
  };
};

const isCorrectClick = (state, index) => state.board[index] === state.next;

function reducer(state, action) {
  switch (action.type) {
    case "click": {
      if (!isCorrectClick(state, action.index)) return state;

      const board = [...state.board];
      const queue = [...state.queue];
      board[action.index] = queue.shift() ?? null;

      return {
        ...state,
        board: board,
        queue: queue,
        next: state.next + 1,
      };
    }
    default:
      return state;
  }
}

export const useGame = (level, { onStart, onFinish } = {}) => {
  const size = level + 2;
  const total = size * size * 2;
  const [state, dispatch] = useReducer(reducer, size, initGame);
  const isFinished = state.next > total;

  const click = (index) => {
    if (!isCorrectClick(state, index)) return;

    if (state.next === 1) onStart?.();
    if (state.next === total) onFinish?.();

    dispatch({ type: "click", index: index });
  };

  return {
    size: size,
    total: total,
    board: state.board,
    next: state.next,
    isFinished: isFinished,
    click: click,
  };
};
