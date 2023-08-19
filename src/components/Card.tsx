import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

type CardProps = {
  onClick: () => void;
};

export const Card: FC<PropsWithChildren<CardProps>> = ({
  children,
  onClick,
}) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.9,
      }}
      className="bg-semi-dark-navy rounded-xl shadow-pickMenuShadow w-24 h-24 flex justify-center items-center hover:cursor-pointer p-6"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};
