import { Mark } from "./constants";
import { getBestMove } from "./getBestMove";
import { BoardType } from "./types";

export const cpuMove = ({
  gamePanel,
  cpuMark,
  turn,
  setTurn,
  setGamePanel,
}: {
  gamePanel: BoardType;
  cpuMark: Mark;
  turn: Mark;
  setTurn: React.Dispatch<React.SetStateAction<Mark>>;
  setGamePanel: React.Dispatch<React.SetStateAction<BoardType>>;
}) => {
  const randomTimeout = Math.floor(Math.random() * (1500 - 600)) + 600;
  const isNewGame = gamePanel.every((cell) => cell === null);

  const updateGamePanel = (newGamePanel: BoardType) => {
    setTimeout(() => {
      setGamePanel(newGamePanel);
      setTurn(turn === Mark.X ? Mark.O : Mark.X);
    }, randomTimeout);
  };

  if (isNewGame) {
    const randomCell = Math.floor(Math.random() * 9);
    const newGamePanel = [...gamePanel];
    newGamePanel[randomCell] = cpuMark;
    updateGamePanel(newGamePanel);
  } else {
    const bestMove = getBestMove(gamePanel, cpuMark);
    const newGamePanel = [...gamePanel];
    newGamePanel[bestMove] = cpuMark;
    updateGamePanel(newGamePanel);
  }
};
