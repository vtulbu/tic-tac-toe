import { motion } from "framer-motion";
import { FC } from "react";
import { useGameContext } from "../provider";
import { Opponent } from "../utils/constants";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{
        scale: 0.95,
      }}
      className={`py-4 rounded-2xl ${className}`}
      onClick={onClick}
    >
      <span className="text-semi-dark-navy text-base capitalize font-bold tracking-widest">
        {text}
      </span>
    </motion.button>
  );
};

export const NewGameButtons = () => {
  const [, { setOpponent }] = useGameContext();

  return (
    <div className="flex flex-col gap-4 w-full">
      {["NEW GAME (VS CPU)", "NEW GAME (VS PLAYER)"].map((text, idx) => (
        <Button
          key={idx}
          text={text}
          className={
            idx === 0
              ? "bg-light-yellow shadow-newGameCpu"
              : "bg-light-blue shadow-newGamePlayer"
          }
          onClick={() => {
            setOpponent(idx === 0 ? Opponent.CPU : Opponent.Player);
          }}
        />
      ))}
    </div>
  );
};
