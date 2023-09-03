"use client";

import { Button, Input, useToast } from "@/src/components/ui";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { useUser } from "@/src/database/getUser";
import { useCourses } from "@/src/lib/hooks";
import { useColors } from "@/src/lib/hooks/useColors";
import { Course } from "@/src/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

export function CourseSettings({ course }: { course: Course }) {
  const { toast } = useToast();
  // const { data: course, isLoading: courseLoading } = useCourses(id);
  // const { data: color, isLoading: colorLoading } = useColors(course.id);
  const color = { hexcode: "#FFFFFF" };
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
  });
  const router = useRouter();
  const user = useUser();

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
                `/api/canvas/${user.data?.canvas_base_url}/api/v1/users/self/colors/course_${course.id}?access_token=${user.data?.canvas_api_token}`,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ hexcode: data.color }),
                }
              );
              const res2 = await fetch(
                `/api/canvas/${user.data?.canvas_base_url}/api/v1/users/self/course_nicknames/${course.id}?access_token=${user.data?.canvas_api_token}`,
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
                  <FormControl>
                    <Input placeholder="Fun course" {...field} />
                  </FormControl>
                  <FormDescription style={{ marginTop: "0" }}>
                    This is shown only to you
                  </FormDescription>
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
                  <FormControl>
                    <InputMask
                      mask={"#******"}
                      placeholder="#FFFFFF"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription style={{ marginTop: "0" }}>
                    This is shown only to you
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className={"sm:justify-between"}>
              <DialogClose>
                <Button
                  type="reset"
                  variant={"outline"}
                  onClick={() => {
                    form.reset();
                  }}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                variant={!form.formState.isValid ? "disabled" : "default"}
                disabled={!form.formState.isValid}
              >
                Create
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </>
  );
}
