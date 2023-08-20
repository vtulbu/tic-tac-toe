import { BoardType } from "./types";

export const checkTie = (gamePanel: BoardType) => {
  return gamePanel.every((cell) => cell);
};
