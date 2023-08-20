import { AnimatePresence, motion } from "framer-motion";
import { GameBoardHeader } from "./GameBoardHeader";
import { GamePanel } from "./GamePanel";
import { GameBoardResults } from "./GameBoardResults";
import { Modal } from "./Modal";
import ModalContent from "./ModalContent";
import { useGameContext } from "../provider";

export const GameBoard = () => {
  const [{ isModalOpen }] = useGameContext();

  return (
    <motion.div
      key={"game-board"}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 2,
      }}
      className="h-screen p-6 w-full"
      initial={{ y: 800 }}
      animate={{ y: 0 }}
      exit={{ y: -800 }}
    >
      <GameBoardHeader />
      <GamePanel />
      <GameBoardResults />
      <AnimatePresence>
        {isModalOpen && (
          <Modal>
            <ModalContent />
          </Modal>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
