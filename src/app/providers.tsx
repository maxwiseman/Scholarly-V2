"use client";

import { AnimatePresence } from "framer-motion";
import { TooltipProvider } from "../components/ui/tooltip";
import { SessionProvider } from "next-auth/react";
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  const queryClient = new QueryClient();

  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AnimatePresence initial={false}>
            <html lang="en" className={"h-[100%] "}>
              {children}
            </html>
          </AnimatePresence>
        </TooltipProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
