"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { Form } from "@/src/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Setting } from "../settings/setting";
// import { Button } from "@/src/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import dynamic from "next/dynamic";

const Button = dynamic(() =>
  import("@/src/components/ui/button").then((Button) => {
    return Button.Button;
  })
);

export default function NewModal() {
  const formSchema = z.object({
    title: z.string(),
    class: z.string(),
    // source: z.enum(["paste", "upload", "web", "assignment"]),
    source: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    resetOptions: {
      keepDirtyValues: true,
    },
  });

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New read</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <Setting
            form={form}
            name="title"
            label="Title"
            placeholder="To Kill A Mockingbird"
            type="text"
          />
          <Setting
            form={form}
            name="class"
            label="Class"
            placeholder="Pick something..."
            type="select"
            data={[
              { value: "english", label: "English" },
              { value: "science", label: "Science" },
              { value: "history", label: "History" },
            ]}
          />
          <Setting
            form={form}
            name="source"
            label="Source"
            placeholder="Pick something..."
            type="select"
            data={[
              { value: "paste", label: "Text" },
              { value: "upload", label: "Upload" },
              { value: "web", label: "URL" },
              { value: "assignment", label: "Assignment" },
            ]}
          />
          <DialogFooter>
            <Button
              type="submit"
              variant={!form.formState.isValid ? "disabled" : "default"}
              disabled={!form.formState.isValid}
            >
              Next
            </Button>
          </DialogFooter>
        </Form>
      </DialogContent>
      <DialogTrigger suppressHydrationWarning>
        <Button>
          <IconPlus className="w-4 h-4" />
          New
        </Button>
      </DialogTrigger>
    </Dialog>
  );
}
