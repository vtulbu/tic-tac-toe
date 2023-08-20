import React, { FC, PropsWithChildren, useCallback } from "react";
import { GameContextType } from "./types";
import { Mark, Opponent, emptyGamePanel } from "../utils/constants";
import { getWinner } from "../utils/getWinner";
import { checkTie } from "../utils/checkTie";
import { BoardType } from "../utils/types";

export const GameContext = React.createContext<GameContextType>([
  {
    firstPlayersMark: Mark.O,
    opponent: null,
    results: {
      x: 0,
      o: 0,
      ties: 0,
    },
    gamePanel: emptyGamePanel,
    turn: Mark.X,
    isModalOpen: false,
    winner: null,
  },
  {
    setFirstPlayerMark: () => undefined,
    setOpponent: () => undefined,
    setGamePanel: () => undefined,
    setTurn: () => undefined,
    setIsModalOpen: () => undefined,
    setWinner: () => undefined,
    resetGame: () => undefined,
    nextRound: () => undefined,
  },
]);

export const GameProvider: FC<PropsWithChildren> = (props) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [winner, setWinner] = React.useState<Mark | null>(null);
  const [firstPlayersMark, setFirstPlayerMark] = React.useState<Mark>(Mark.O);
  const [opponent, setOpponent] = React.useState<Opponent | null>(null);
  const [turn, setTurn] = React.useState<Mark>(Mark.X);
  const [results, setResults] = React.useState({
    x: 0,
    o: 0,
    ties: 0,
  });

  const [gamePanel, setGamePanel] = React.useState<BoardType>(emptyGamePanel);

  React.useEffect(() => {
    const isXWinner = getWinner(gamePanel, Mark.X);
    if (isXWinner) {
      setResults((prev) => ({ ...prev, x: prev.x + 1 }));
      setIsModalOpen(true);
      setWinner(Mark.X);
      return;
    }

    const isOWinner = getWinner(gamePanel, Mark.O);
    if (isOWinner) {
      setResults((prev) => ({ ...prev, o: prev.o + 1 }));
      setIsModalOpen(true);
      setWinner(Mark.O);
      return;
    }

    const isTie = checkTie(gamePanel);
    if (isTie) {
      setResults((prev) => ({ ...prev, tie: prev.ties + 1 }));
      setIsModalOpen(true);
      return;
    }

    if (opponent === Opponent.CPU) {
      const cpuMark = firstPlayersMark === Mark.X ? Mark.O : Mark.X;
      if (turn === cpuMark) {
        // const emptyCells = gamePanel.reduce<number[]>(
        //   (acc, cell, index) => (cell === null ? [...acc, index] : acc),
        //   []
        // );
        // const randomCell =
        //   emptyCells[Math.floor(Math.random() * emptyCells.length)];
        // const newGamePanel = [...gamePanel];
        // newGamePanel[randomCell] = cpuMark;
        // setGamePanel(newGamePanel);
        // setTurn(turn === Mark.X ? Mark.O : Mark.X);
      }
    }
  }, [turn, opponent]);

  const resetGame = useCallback(() => {
    setOpponent(null);
    setGamePanel(emptyGamePanel);
    setTurn(Mark.X);
    setIsModalOpen(false);
    setWinner(null);
    setResults({
      x: 0,
      o: 0,
      ties: 0,
    });
  }, []);

  const nextRound = useCallback(() => {
    setGamePanel(emptyGamePanel);
    setTurn(Mark.X);
    setIsModalOpen(false);
    setWinner(null);
  }, []);

  return (
    <GameContext.Provider
      value={[
        {
          firstPlayersMark,
          opponent,
          results,
          gamePanel,
          turn,
          isModalOpen,
          winner,
        },
        {
          setFirstPlayerMark,
          setOpponent,
          setGamePanel,
          setTurn,
          setIsModalOpen,
          setWinner,
          resetGame,
          nextRound,
        },
      ]}
    >
      {props.children}
    </GameContext.Provider>
  );
};
