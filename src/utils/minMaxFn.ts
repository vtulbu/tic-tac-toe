import { Mark } from "./constants";
import { getWinner } from "./getWinner";
import { BoardType } from "./types";

export const SCORES: Record<string, number> = {
  1: 1,
  0: 0,
  2: -1,
};

export function minMax(board: BoardType, arg1: boolean, cpuMark: Mark) {
  const isCpuWinner = getWinner(board, cpuMark);
  const isPlayerWinner = getWinner(board, cpuMark === Mark.X ? Mark.O : Mark.X);

  if (isCpuWinner) {
    return SCORES[1];
  } else if (isPlayerWinner) {
    return SCORES[2];
  } else if (!board.includes(null)) {
    return SCORES[0];
  }

  if (arg1) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = cpuMark;
        const score = minMax(board, false, cpuMark);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        board[i] = cpuMark === Mark.X ? Mark.O : Mark.X;
        const score = minMax(board, true, cpuMark);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}
