import { motion } from "framer-motion";
import { useGameContext } from "../provider";
import { Mark, Opponent } from "../utils/constants";
import { Card } from "./Card";
import { IconO } from "./SVG/IconO";
import { IconX } from "./SVG/IconX";

export const GamePanel = () => {
  const [
    { gamePanel, turn, opponent, firstPlayersMark, winningLine },
    { setGamePanel, setTurn },
  ] = useGameContext();

  return (
    <div className="grid gap-5 mb-5 grid-rows-3 grid-cols-3 max-w-xs min-w-280">
      {gamePanel.map((c, i) => {
        return (
          <Card
            key={`${c} ${i}`}
            winningCard={winningLine.includes(i)}
            onClick={() => {
              if (opponent === Opponent.CPU) {
                const cpuMark = firstPlayersMark === Mark.X ? Mark.O : Mark.X;
                if (turn === cpuMark) {
                  return;
                }
              }

              if (c === null) {
                const newGamePanel = [...gamePanel];
                newGamePanel[i] = turn;
                setTurn(turn === Mark.X ? Mark.O : Mark.X);
                setGamePanel(newGamePanel);
              }
            }}
          >
            <motion.span
              initial={{
                scale: 0,
              }}
              animate={{
                scale: c === null ? 0 : 1,
              }}
            >
              {c === null ? null : c === Mark.X ? <IconX /> : <IconO />}
            </motion.span>
          </Card>
        );
      })}
    </div>
  );
};
