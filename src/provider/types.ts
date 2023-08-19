import { Mark, Opponent } from "../utils/constants";

interface GameState {
  firstPlayersMark: Mark;
  opponent: Opponent | null;
  results: {
    [Mark.X]: number;
    [Mark.O]: number;
    tie: number;
  };
  gamePanel: (Mark | null)[][];
  turn: Mark;
}

interface GameActions {
  setFirstPlayerMark: React.Dispatch<React.SetStateAction<Mark>>;
  setOpponent: React.Dispatch<React.SetStateAction<Opponent | null>>;
  setGamePanel: React.Dispatch<React.SetStateAction<(Mark | null)[][]>>;
  setTurn: React.Dispatch<React.SetStateAction<Mark>>;
}

export type GameContextType = [GameState, GameActions];
