"use client";

import { Button } from "@/src/components/ui";
import { Dialog, DialogTrigger } from "@/src/components/ui/dialog";
import { IconDotsVertical } from "@tabler/icons-react";
import { CourseSettings } from "../courseSettingsDialog";
import dynamic from "next/dynamic";
import { Course } from "@/src/lib/types";

export default function SettingsButton({ course }: { course: Course }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <IconDotsVertical className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <CourseSettings course={course} />
    </Dialog>
  );
}
