import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import { useGameContext } from "../provider";
import { Mark } from "../utils/constants";

type CardProps = {
  onClick: () => void;
  winningCard: boolean;
};

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  onClick,
  winningCard,
}) => {
  const [{ winner, isModalOpen }, { setIsModalOpen }] = useGameContext();
  const isXWinner = winner === Mark.X;

  return (
    <motion.div
      initial={{
        scale: 1,
      }}
      animate={{
        scale: winningCard ? 1.1 : 1,
      }}
      style={{
        backgroundColor: winningCard
          ? isXWinner
            ? "#F2B137B3"
            : " #31C3BDCC"
          : "",
      }}
      whileTap={{
        scale: 0.9,
      }}
      className="bg-semi-dark-navy rounded-xl shadow-pickMenuShadow w-24 h-24 flex justify-center items-center hover:cursor-pointer p-6"
      onClick={onClick}
      onAnimationComplete={() => {
        if (winner) {
          setTimeout(() => {
            !isModalOpen && setIsModalOpen(true);
          }, 1000);
        }
      }}
    >
      {children}
    </motion.div>
  );
};
