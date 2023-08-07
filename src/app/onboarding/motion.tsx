"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

export default function Motion({
  children,
  key,
  direction,
}: {
  children: ReactNode;
  key: number;
  direction: any;
}) {
  return (
    <motion.div
      key={key}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="absolute w-screen h-screen bg-transparent flex flex-col gap-2 items-center justify-center"
    >
      <div className="w-96">{children}</div>
    </motion.div>
  );
}
