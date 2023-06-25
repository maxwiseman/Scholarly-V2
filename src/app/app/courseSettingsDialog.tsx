"use client";

import { Button, Input, useToast } from "@/src/components/ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { InputMask } from "@/src/components/ui/input-mask";
import { Course } from "@/src/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconDotsVertical } from "@tabler/icons-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export function CourseSettings({
  // children,
  course,
  user,
}: {
  // children: ReactNode;
  course: Course;
  user: any;
}) {
  const { toast } = useToast();
  const formSchema = z.object({
    nickname: z.string().min(2, {
      message: "Nickname must be at least 2 characters.",
    }),
    color: z.string().regex(/\#([A-Fa-f0-9]{6})/, {
      message: "Invalid color.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: course.name,
      color: course.course_color,
    },
  });
  // const user = useUser();

  // return (
  //   <Dialog>
  //     <DialogTrigger>{children}</DialogTrigger>
  //     <DialogContent>
  //       <DialogTitle>Test</DialogTitle>
  //     </DialogContent>
  //   </Dialog>
  // );

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"ghost"} size={"icon"}>
          <IconDotsVertical className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{course.name}</DialogTitle>
          <DialogDescription>
            Here you can adjust the settings for the {course.name} course.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(async (data) => {
              const res = await fetch(
                `/api/canvas/${user.unsafeMetadata.district}/api/v1/users/self/course_nicknames/${course.id}?access_token=${user.unsafeMetadata.canvasToken}`,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ nickname: data.nickname }),
                }
              );
              if (!res.ok) {
                toast({
                  title: "Failed to fetch",
                  description: "Check the console for more details",
                  variant: "destructive",
                });
                console.log("Fetch error: ", res);
              } else {
                toast({
                  title: "Course updated",
                  description: "The course was updated successfully",
                });
              }
            })}
            className="space-y-5"
          >
            <FormField
              control={form.control}
              name="nickname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nickname</FormLabel>
                  <FormDescription style={{ marginTop: "0" }}>
                    This is shown only to you
                  </FormDescription>
                  <FormControl>
                    <Input placeholder="Fun course" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormDescription style={{ marginTop: "0" }}>
                    This is shown only to you
                  </FormDescription>
                  <FormControl>
                    <InputMask
                      mask={"#******"}
                      placeholder="#FFFFFF"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mr-2">
              Submit
            </Button>
            <Button type="reset" variant={"outline"}>
              Reset
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
