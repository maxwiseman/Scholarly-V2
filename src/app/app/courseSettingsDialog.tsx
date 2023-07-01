"use client";

import { Button, Input, useToast } from "@/src/components/ui";
import { ContextMenuItem } from "@/src/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
import { useCourses } from "@/src/lib/hooks";
import { useColors } from "@/src/lib/hooks/useColors";
import { Course } from "@/src/lib/types";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { IconDotsVertical } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export function CourseSettings({ id }: { id: string }) {
  const { toast } = useToast();
  const { data: course, isLoading: courseLoading } = useCourses(id);
  const { data: color, isLoading: colorLoading } = useColors(id);
  const formSchema = z.object({
    nickname: z.string().min(2, {
      message: "Nickname must be at least 2 characters",
    }),
    color: z.string().regex(/\#([A-Fa-f0-9]{6})/, {
      message: "Invalid hex code",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: course?.name,
      color: color?.hexcode,
    },
    resetOptions: {
      keepDirtyValues: true,
    },
  });
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    form.reset({
      nickname: course?.name,
      color: color?.hexcode,
    });
  }, [courseLoading, colorLoading]);

  return (
    <>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{course?.name}</DialogTitle>
          <DialogDescription>
            Here you can adjust the settings for the {course?.name} course.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(async (data) => {
              const res = await fetch(
                `/api/canvas/${user?.unsafeMetadata.district}/api/v1/users/self/colors/course_${course.id}?access_token=${user?.unsafeMetadata.canvasToken}`,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ hexcode: data.color }),
                }
              );
              const res2 = await fetch(
                `/api/canvas/${user?.unsafeMetadata.district}/api/v1/users/self/course_nicknames/${course.id}?access_token=${user?.unsafeMetadata.canvasToken}`,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ nickname: data.nickname }),
                }
              );
              if (!res.ok || !res2.ok) {
                toast({
                  title: "Failed to fetch",
                  description: "Check the console for more details",
                  variant: "destructive",
                });
                console.log("Fetch error: ", res, res2);
              } else {
                toast({
                  title: "Course updated",
                  description: "The course was updated successfully",
                });
                router.refresh();
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
            <DialogFooter className="flex sm:justify-start">
              <Button type="submit" className="mr-2">
                Submit
              </Button>
              <Button
                type="reset"
                variant={"outline"}
                onClick={() => {
                  form.reset({
                    nickname: course?.name,
                    color: color?.hexcode,
                  });
                }}
              >
                Reset
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </>
  );
}
