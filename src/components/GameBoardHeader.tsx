import { motion } from "framer-motion";
import { Logo } from "./SVG/Logo";
import { IconX } from "./SVG/IconX";
import { useGameContext } from "../provider";
import { Mark } from "../utils/constants";
import { IconO } from "./SVG/IconO";

const arrow = {
  rest: { rotate: 0 },
  hover: { rotate: 360, transition: { duration: 0.4 } },
};

export const GameBoardHeader = () => {
  const [{ turn }, { setIsModalOpen, setRestart }] = useGameContext();
  return (
    <div className="flex items-center mb-16 w-full justify-between max-w-xs min-w-280">
      <Logo />
      <div className="py-3 px-4 bg-semi-dark-navy shadow-turnInfo rounded-md flex gap-3 items-center h-10">
        {turn === Mark.X ? <IconX /> : <IconO />}
        <span className="text-silver">TURN</span>
      </div>
      <motion.button
        whileTap={{
          scale: 0.9,
        }}
        className="p-4 rounded-2xl bg-silver shadow-resetButton refresh hover:bg-silver-hover"
        initial="rest"
        whileHover="hover"
        onClick={() => {
          setIsModalOpen(true);
          setRestart(true);
        }}
      >
        <motion.svg variants={arrow} width="20" height="20">
          <path
            d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z"
            fill="#1F3641"
          />
        </motion.svg>
      </motion.button>
    </div>
  );
};
