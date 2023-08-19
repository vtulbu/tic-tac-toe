import { Mark, Opponent } from "../utils/constants";

interface GameState {
  firstPlayersMark: Mark;
  opponent: Opponent | null;
}

interface GameActions {
  setFirstPlayerMark: React.Dispatch<React.SetStateAction<Mark>>;
  setOpponent: React.Dispatch<React.SetStateAction<Opponent | null>>;
}

export type GameContextType = [GameState, GameActions];
