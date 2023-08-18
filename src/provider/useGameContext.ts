import { useContext } from "react";
import { GameContextType } from "./types";
import { GameContext } from "./GameProvider";

export const useGameContext = (): GameContextType => {
  const [state, dispatch] = useContext(GameContext);

  return [state, dispatch];
};
