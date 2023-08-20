import { motion } from "framer-motion";
import { GameBoardHeader } from "./GameBoardHeader";
import { GamePanel } from "./GamePanel";
import { GameBoardResults } from "./GameBoardResults";
import { Modal } from "./Modal";
import { useGameContext } from "../provider";

export const GameBoard = () => {
  const [{ isModalOpen }] = useGameContext();
  return (
    <motion.div
      key={"gameBoard"}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 2,
      }}
      className="h-screen p-6 w-full"
    >
      <GameBoardHeader />
      <GamePanel />
      <GameBoardResults />
      {isModalOpen && <Modal />}
    </motion.div>
  );
};
