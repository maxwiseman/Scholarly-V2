"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Motion({
  children,
  key,
}: {
  children: ReactNode;
  key: number;
}) {
  return (
    <motion.div
      key={key}
      initial={{ x: 1000, opacity: 0 }}
      animate={{ x: 0, opacity: 1, zIndex: 1 }}
      exit={{ x: -1000, opacity: 0, zIndex: 0 }}
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="relative w-screen h-screen flex flex-col gap-2 items-center justify-center"
    >
      <div className="w-96">{children}</div>
    </motion.div>
  );
}
