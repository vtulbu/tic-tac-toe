import { motion } from "framer-motion";
import { useGameContext } from "../provider";
import { Mark } from "../utils/constants";
import { Card } from "./Card";
import { IconO } from "./SVG/IconO";
import { IconX } from "./SVG/IconX";

export const GamePanel = () => {
  const [{ gamePanel, turn }, { setGamePanel, setTurn }] = useGameContext();

  return (
    <div className="grid gap-5 mb-5 grid-rows-3 grid-cols-3">
      {gamePanel.map((c, i) => {
        return (
          <Card
            key={`${c} ${i}`}
            onClick={() => {
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
