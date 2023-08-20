import { useGameContext } from "../provider";
import { Button } from "./Button";
import { IconX } from "./SVG/IconX";
import { Mark, Opponent } from "../utils/constants";
import { IconO } from "./SVG/IconO";
import { motion } from "framer-motion";

export default function ModalContent() {
  const [{ winner, firstPlayersMark, opponent }, { resetGame, nextRound }] =
    useGameContext();
  const isXWinner = winner === Mark.X;

  const getTitleText = () => {
    if (opponent === Opponent.CPU) {
      return firstPlayersMark === Mark.X && isXWinner
        ? "You won!"
        : "OH NO, YOU LOST…";
    } else {
      return isXWinner
        ? firstPlayersMark === Mark.X
          ? "Player 1 wins!"
          : "Player 2 wins!"
        : firstPlayersMark === Mark.X
        ? "Player 2 wins!"
        : "Player 1 wins!";
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {winner && (
        <p className="mb-4 uppercase text-silver font-bold text-sm">
          {getTitleText()}
        </p>
      )}
      <div className="mb-6 flex items-center justify-center gap-2">
        {winner && (
          <motion.div
            className="h-7"
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: isXWinner ? [0, 0, 180, 180, 0] : [],
              rotateX: !isXWinner ? [0, 0, 90, -90, 0] : [],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {isXWinner ? <IconX /> : <IconO />}
          </motion.div>
        )}
        <p
          className={`uppercase text-2xl ${
            winner
              ? isXWinner
                ? "text-light-blue"
                : "text-light-yellow"
              : "text-silver"
          }`}
        >
          {winner ? "Takes the round" : "Round Tied"}
        </p>
      </div>
      <div className="flex gap-4">
        {[
          { id: 1, label: "QUIT" },
          { id: 2, label: "NEXT ROUND" },
        ].map((b) => {
          return (
            <Button
              key={b.id + b.label}
              text={b.label}
              className={`p-4 ${
                b.id === 1
                  ? "bg-light-blue shadow-resetButton"
                  : "bg-light-yellow shadow-nextRound"
              }`}
              onClick={() => {
                if (b.id === 1) {
                  resetGame();
                } else if (b.id === 2) {
                  nextRound();
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
