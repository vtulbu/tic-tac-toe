import React, { FC, PropsWithChildren } from "react";
import { GameContextType } from "./types";
import { Mark, Opponent } from "../utils/constants";

export const GameContext = React.createContext<GameContextType>([
  {
    firstPlayersMark: Mark.O,
    opponent: null,
  },
  {
    setFirstPlayerMark: () => undefined,
    setOpponent: () => undefined,
  },
]);

export const GameProvider: FC<PropsWithChildren> = (props) => {
  const [firstPlayersMark, setFirstPlayerMark] = React.useState<Mark>(Mark.O);
  const [opponent, setOpponent] = React.useState<Opponent | null>(null);

  return (
    <GameContext.Provider
      value={[
        {
          firstPlayersMark,
          opponent,
        },
        {
          setFirstPlayerMark,
          setOpponent,
        },
      ]}
    >
      {props.children}
    </GameContext.Provider>
  );
};
