import { motion } from "framer-motion";
import { NewGameButtons } from "./NewGameButtons";
import { PickMark } from "./PickMark";
import { Logo } from "./SVG/Logo";

export const StartGameMenu = () => {
  return (
    <motion.div
      key={"startGame"}
      initial={{ marginTop: "-200vh" }}
      animate={{ marginTop: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 2,
      }}
      className="flex flex-col gap-8 items-center"
    >
      <Logo />
      <PickMark />
      <NewGameButtons />
    </motion.div>
  );
};