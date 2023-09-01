"use client";

import { useState } from "react";
import { Header } from "./header";
import Navbar from "./navbar";
import PageWrapper from "./pagewrapper";
import { Button } from "@/src/components/ui";
import { IconChevronRight, IconChevronRightPipe } from "@tabler/icons-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full max-h-screen h-full">
        <Header />
        <div className="flex flex-row gap-0 h-screen max-h-screen overflow-clip">
          <AnimatePresence initial={false}>
            {!navbarCollapsed && (
              <motion.div
                exit={{ width: 0 }}
                animate={{ width: "370px" }}
                initial={{ width: 0 }}
                key={"navbar"}
                className="overflow-hidden"
              >
                <Navbar collapse={setNavbarCollapsed} />
              </motion.div>
            )}
            {navbarCollapsed && (
              <motion.div
                exit={{ opacity: 0, left: "370px" }}
                animate={{ opacity: 1, left: 0 }}
                initial={{ opacity: 0, left: "370px" }}
                key={"button"}
                className="absolute top-16 left-0 m-2 z-50"
              >
                <Button
                  size={"icon"}
                  // className="absolute top-16 left-0 m-2 z-50"
                  variant={"outline"}
                  onClick={() => {
                    setNavbarCollapsed(false);
                  }}
                >
                  <IconChevronRightPipe className="w-4 h-4" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
          {/* <div className="min-w-[18rem]" /> */}
          <div className="grow h-full max-h-screen overflow-hidden w-full">
            <PageWrapper>{children}</PageWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
