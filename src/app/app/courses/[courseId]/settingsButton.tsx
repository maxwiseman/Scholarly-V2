"use client";

import { Button } from "@/src/components/ui";
import { Dialog, DialogTrigger } from "@/src/components/ui/dialog";
import { IconDotsVertical } from "@tabler/icons-react";
import { CourseSettings } from "../../courseSettingsDialog";
import dynamic from "next/dynamic";

export default function SettingsButton({
  params,
}: {
  params: { courseId: string };
}) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"ghost"} size={"icon"}>
          <IconDotsVertical className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <CourseSettings id={params.courseId} />
    </Dialog>
  );
}
