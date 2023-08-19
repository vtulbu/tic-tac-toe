import { motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

type PickButtonProps = {
  onClick: () => void;
  className?: string;
};

export const PickButton: FC<PropsWithChildren<PickButtonProps>> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{
        scale: 0.9,
        borderRadius: "10%",
      }}
      className={`py-3 px-12 rounded-lg ${className}`}
      onClick={onClick}
      style={{
        height: "60px",
      }}
    >
      {children}
    </motion.button>
  );
};
