"use client";

import { Button } from "@/src/components/ui";
import { useCourses } from "@/src/lib/hooks";
import { Course } from "@/src/lib/types";
import {
  IconAlertOctagon,
  IconBook,
  IconChevronLeftPipe,
  IconHome,
  IconNotebook,
  IconSettings,
} from "@tabler/icons-react";
import { NavButton, NavCollapsibleButton } from "./navButton";
import { motion } from "framer-motion";

export default function Navbar({
  collapse,
}: {
  collapse: (arg0: boolean) => void;
}) {
  const { data, isLoading } = useCourses() as {
    data: Course[];
    isLoading: boolean;
  };

  return (
    <nav className="p-5 mt-16 w-max left-0 z-39 h-[calc(100vw-4rem)] border-r bg-background min-w-[18rem] max-w-[18rem] flex flex-col space-y-1">
      <NavButton href="/app/home" icon={<IconHome />}>
        Home
      </NavButton>
      <NavCollapsibleButton
        links={
          !isLoading && data && data[0]
            ? data.map((course: any) => {
                return { id: course.id, text: course.name };
              })
            : [{ id: "", text: "Loading..." }]
        }
        icon={<IconNotebook />}
        href="/app/courses"
      >
        Classes
      </NavCollapsibleButton>
      <NavButton href="/app/missing" icon={<IconAlertOctagon />}>
        Missing Assignments
      </NavButton>
      <NavButton href="/app/read" icon={<IconBook />}>
        Read
      </NavButton>
      <NavButton href="/app/settings" icon={<IconSettings />}>
        Settings
      </NavButton>
      <Button
        variant={"ghost"}
        onClick={() => {
          collapse(true);
        }}
        className="w-full justify-between"
      >
        <div className="flex flex-row gap-2 items-center">
          <IconChevronLeftPipe className="w-4 h-4" />
          Collapse
        </div>
      </Button>
    </nav>
  );
}
