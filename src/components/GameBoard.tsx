import { motion } from "framer-motion";

export const GameBoard = () => {
  return (
    <motion.div
      key={"gameBoard"}
      //   animate={{ marginBottom: 0 }}
      //   exit={{ marginBottom: "-150vh" }}
      //   initial={{
      //     marginBottom: "-150vh",
      //   }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 2,
      }}
      className="flex flex-col gap-8 items-center"
    >
      Game
    </motion.div>
  );
};
