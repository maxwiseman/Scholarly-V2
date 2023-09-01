"use client";

import { useState } from "react";
import { Header } from "./header";
import Navbar from "./navbar";
import PageWrapper from "./pagewrapper";
import { Button } from "@/src/components/ui";
import { IconChevronRight, IconChevronRightPipe } from "@tabler/icons-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);

  return (
    <>
      <div className="flex flex-col w-full max-h-screen h-full">
        <Header />
        <div className="flex flex-row gap-0 h-screen max-h-screen overflow-clip">
          {!navbarCollapsed && <Navbar collapse={setNavbarCollapsed} />}
          {navbarCollapsed && (
            <Button
              size={"icon"}
              className="absolute top-16 left-0 m-2 z-50"
              variant={"outline"}
              onClick={() => {
                setNavbarCollapsed(false);
              }}
            >
              <IconChevronRightPipe className="w-4 h-4" />
            </Button>
          )}
          {/* <div className="min-w-[18rem]" /> */}
          <div className="grow h-full max-h-screen overflow-hidden w-full">
            <PageWrapper>{children}</PageWrapper>
          </div>
        </div>
      </div>
    </>
  );
}
