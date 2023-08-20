import { Mark } from "./constants";
import { minMax } from "./minMaxFn";
import { BoardType } from "./types";

export const getBestMove = (board: BoardType, cpuMark: Mark) => {
  let bestScore = -Infinity;
  let bestMove = -1;

  for (let i = 0; i < board.length; i++) {
    if (board[i] === null) {
      board[i] = cpuMark;
      const score = minMax(board, false, cpuMark);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
};
