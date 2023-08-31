"use client";

import { ScrollArea } from "@/src/components/ui/scroll-area";
import { motion } from "framer-motion";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.75, type: "spring" }}
      className="w-full max-h-screen"
    >
      <ScrollArea className="mt-16 max-h-[calc(100vh-4rem)]">
        {/* <div className="h-16 w-full" /> */}
        {children}
      </ScrollArea>
    </motion.div>
  );
}
