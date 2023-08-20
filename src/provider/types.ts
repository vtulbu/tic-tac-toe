import { Mark, Opponent } from "../utils/constants";
import { BoardType } from "../utils/types";

interface GameState {
  firstPlayersMark: Mark;
  opponent: Opponent | null;
  results: {
    [Mark.X]: number;
    [Mark.O]: number;
    ties: number;
  };
  gamePanel: BoardType;
  turn: Mark;
  isModalOpen: boolean;
  winner: Mark | null;
}

interface GameActions {
  setFirstPlayerMark: React.Dispatch<React.SetStateAction<Mark>>;
  setOpponent: React.Dispatch<React.SetStateAction<Opponent | null>>;
  setGamePanel: React.Dispatch<React.SetStateAction<BoardType>>;
  setTurn: React.Dispatch<React.SetStateAction<Mark>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setWinner: React.Dispatch<React.SetStateAction<Mark | null>>;
  resetGame: () => void;
  nextRound: () => void;
}

export type GameContextType = [GameState, GameActions];
