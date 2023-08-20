import { motion } from "framer-motion";
import { FC } from "react";

type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

export const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
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
