import React, { FC, PropsWithChildren, useCallback } from "react";
import { GameContextType } from "./types";
import {
  Mark,
  Opponent,
  emptyGamePanel,
  zeroResults,
} from "../utils/constants";
import { getWinner, winningCombinations } from "../utils/getWinner";
import { checkTie } from "../utils/checkTie";
import { BoardType } from "../utils/types";
import { changeFavicon } from "../utils/changeFavicon";
import { cpuMove } from "../utils/cpuMove";

export const GameContext = React.createContext<GameContextType>([
  {
    firstPlayersMark: Mark.O,
    opponent: null,
    results: zeroResults,
    gamePanel: emptyGamePanel,
    turn: Mark.X,
    isModalOpen: false,
    winner: null,
    restart: false,
    winningLine: [],
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
    setRestart: () => undefined,
  },
]);

export const GameProvider: FC<PropsWithChildren> = (props) => {
  const [restart, setRestart] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [winner, setWinner] = React.useState<Mark | null>(null);
  const [firstPlayersMark, setFirstPlayerMark] = React.useState<Mark>(Mark.O);
  const [opponent, setOpponent] = React.useState<Opponent | null>(null);
  const [turn, setTurn] = React.useState<Mark>(Mark.X);
  const [results, setResults] = React.useState(zeroResults);
  const [gamePanel, setGamePanel] = React.useState<BoardType>(emptyGamePanel);
  const [winningLine, setWinningLine] = React.useState<number[]>([]);

  React.useEffect(() => {
    changeFavicon(turn);

    const isXWinner = getWinner(gamePanel, Mark.X);
    const isOWinner = getWinner(gamePanel, Mark.O);

    if (isXWinner || isOWinner) {
      // setIsModalOpen(true);
      setWinner(isXWinner ? Mark.X : Mark.O);
      setResults((prev) => ({
        ...prev,
        [isXWinner ? Mark.X : Mark.O]: prev[isXWinner ? Mark.X : Mark.O] + 1,
      }));

      const winningCombination = winningCombinations.find((c) => {
        const [a, b, d] = c;

        return (
          gamePanel[a] &&
          gamePanel[a] === gamePanel[b] &&
          gamePanel[a] === gamePanel[d]
        );
      });
      setWinningLine(winningCombination || []);

      return;
    }

    const isTie = checkTie(gamePanel);
    if (isTie) {
      setResults((prev) => ({ ...prev, ties: prev.ties + 1 }));
      setIsModalOpen(true);
      return;
    }

    if (opponent === Opponent.CPU) {
      const cpuMark = firstPlayersMark === Mark.X ? Mark.O : Mark.X;

      if (turn === cpuMark) {
        cpuMove({
          gamePanel,
          setGamePanel,
          turn,
          setTurn,
          cpuMark,
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turn, opponent]);

  const resetGame = useCallback(() => {
    setOpponent(null);
    setGamePanel(emptyGamePanel);
    setTurn(Mark.X);
    setIsModalOpen(false);
    setWinner(null);
    setResults(zeroResults);
    setRestart(false);
    setWinningLine([]);
  }, []);

  const nextRound = useCallback(() => {
    setGamePanel(emptyGamePanel);
    setTurn(Mark.X);
    setIsModalOpen(false);
    setWinner(null);
    setWinningLine([]);
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
          restart,
          winningLine,
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
          setRestart,
        },
      ]}
    >
      {props.children}
    </GameContext.Provider>
  );
};
