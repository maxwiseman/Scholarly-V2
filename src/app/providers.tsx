"use client";

import { AnimatePresence } from "framer-motion";
import { TooltipProvider } from "../components/ui/tooltip";
import { SessionProvider } from "next-auth/react";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <SessionProvider session={session}>
      <TooltipProvider>
        <AnimatePresence initial={false}>
          <html lang="en" className={"h-[100%] "}>
            {children}
          </html>
        </AnimatePresence>
      </TooltipProvider>
    </SessionProvider>
  );
}
