"use client";

import { Button, useToast } from "@/src/components/ui";
import { Form } from "@/src/components/ui/form";
import { Separator } from "@/src/components/ui/separator";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Setting } from "../setting";

export default function AccountSettings() {
  const { user, isLoaded } = useUser();
  const { toast } = useToast();
  const formSchema = z.object({
    username: z.optional(z.string()),
    email: z.string(),
    bio: z.optional(z.string()),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: user?.username?.toString(),
      email: user?.emailAddresses[0]?.toString(),
      bio: user?.unsafeMetadata?.bio as string,
    },
    resetOptions: {
      // keepDirtyValues: true,
    },
  });

  useEffect(() => {
    form.reset({
      username: user?.username?.toString(),
      email: user?.emailAddresses[0]?.toString(),
      bio: user?.unsafeMetadata?.bio as string,
    });
  }, [isLoaded]);

  useEffect(() => {
    form.reset(
      {
        username: user?.username?.toString(),
        email: user?.emailAddresses[0]?.toString(),
        bio: user?.unsafeMetadata?.bio as string,
      },
      {
        keepDirtyValues: true,
      }
    );
  }, [isLoaded]);

  return (
    <div className="max-w-2xl w-full">
      <div className="flex gap-1 mb-3 flex-col">
        <h1 className="mt-0 text-lg font-medium">Profile</h1>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <Separator className="mb-8" />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit((data) => {
            console.log("Submitted Form: ", data);
          })}
          className="space-y-5"
        >
          <Setting
            form={form}
            name="username"
            label="Username"
            placeholder="JohnDoe123"
            description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days."
            type="text"
            // className="max-w-[280px]"
          />
          <Setting
            form={form}
            name="email"
            label="Email"
            placeholder="example@example.com"
            description="You can manage verified email addresses in your email settings."
            type="text"
            // className="max-w-[280px]"
          />
          <Setting
            form={form}
            name="bio"
            label="Bio"
            placeholder="Tell us a little bit about yourself"
            description="Tell us a little bit about yourself."
            type="longText"
          />
          <div className="flex sm:justify-start">
            <Button type="submit" className="mr-2">
              Save
            </Button>
            <Button
              type="reset"
              variant={"outline"}
              onClick={() => {
                form.reset(
                  {
                    username: user?.username?.toString(),
                    email: user?.emailAddresses[0]?.toString(),
                    bio: user?.unsafeMetadata?.bio as string,
                  },
                  {
                    keepDirtyValues: false,
                  }
                );
              }}
            >
              Reset
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
