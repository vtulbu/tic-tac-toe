import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";
import { useGameContext } from "../provider";

export const Modal: FC<PropsWithChildren> = ({ children }) => {
  const [{ isModalOpen }] = useGameContext();
  return (
    <motion.div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      initial={{
        opacity: 0,
      }}
      animate={isModalOpen ? "open" : "closed"}
      transition={{ duration: 0.2 }}
      variants={{
        open: { opacity: 1 },
        closed: { opacity: 0 },
      }}
    >
      <div className="fixed inset-0 bg-black opacity-50 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center ">
          <div className="relative transform overflow-hidden bg-semi-dark-navy text-left shadow-xl transition-all w-full">
            <motion.div
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
              }}
              className="px-12 pb-12 pt-10 w-full text-white"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
