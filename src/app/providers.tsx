"use client";

import { createContext, useEffect, useState } from "react";
import { getToken } from "../lib/hooks";
import { useAuth } from "@clerk/nextjs";
import { TooltipProvider } from "../components/ui/tooltip";

export const TokenContext = createContext("");

export function Providers({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>();
  const auth = useAuth();

  useEffect(() => {
    getToken(auth.userId).then((res) => {
      setToken(res);
    });
  });

  return (
    <TokenContext.Provider value={token as string}>
      <TooltipProvider>
        <html lang="en" className={"h-[100%] "}>
          {children}
        </html>
      </TooltipProvider>
    </TokenContext.Provider>
  );
}
