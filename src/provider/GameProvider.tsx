import React, { FC, PropsWithChildren } from "react";
import { GameContextType } from "./types";
import { Mark, Opponent } from "../utils/constants";

export const GameContext = React.createContext<GameContextType>([
  {
    firstPlayersMark: Mark.O,
    opponent: null,
    results: {
      x: 0,
      o: 0,
      tie: 0,
    },
    gamePanel: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    turn: Mark.X,
  },
  {
    setFirstPlayerMark: () => undefined,
    setOpponent: () => undefined,
    setGamePanel: () => undefined,
    setTurn: () => undefined,
  },
]);

export const GameProvider: FC<PropsWithChildren> = (props) => {
  const [firstPlayersMark, setFirstPlayerMark] = React.useState<Mark>(Mark.O);
  const [opponent, setOpponent] = React.useState<Opponent | null>(null);
  const [turn, setTurn] = React.useState<Mark>(Mark.X);
  const [results, setResults] = React.useState({
    x: 0,
    o: 0,
    tie: 0,
  });

  const [gamePanel, setGamePanel] = React.useState<(Mark | null)[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  return (
    <GameContext.Provider
      value={[
        {
          firstPlayersMark,
          opponent,
          results,
          gamePanel,
          turn,
        },
        {
          setFirstPlayerMark,
          setOpponent,
          setGamePanel,
          setTurn,
        },
      ]}
    >
      {props.children}
    </GameContext.Provider>
  );
};
