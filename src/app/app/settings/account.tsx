"use client";

import { Button, Input, useToast } from "@/src/components/ui";
import { Combobox } from "@/src/components/ui/combobox";
import { DatePicker } from "@/src/components/ui/date-picker";
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
import { Separator } from "@/src/components/ui/separator";
import { useCourses } from "@/src/lib/hooks";
import { useColors } from "@/src/lib/hooks/useColors";
import { useUser } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Setting } from "./setting";

export function AccountSettings() {
  const { user, isLoaded } = useUser();
  const { toast } = useToast();
  const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    birthDate: z.string(),
    language: z.string(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: user?.firstName?.toString(),
      lastName: user?.lastName?.toString(),
      birthDate: user?.unsafeMetadata?.birthDate as string,
    },
    resetOptions: {
      keepDirtyValues: true,
    },
  });
  const router = useRouter();

  useEffect(() => {
    form.reset({
      firstName: user?.firstName?.toString(),
      lastName: user?.lastName?.toString(),
    });
  }, [isLoaded]);

  return (
    <div className="max-w-2xl w-full">
      <div className="flex gap-1 mb-3 flex-col">
        <h1 className="mt-0 text-lg font-medium">Account</h1>
        <p className="text-muted-foreground text-sm">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <Separator className="mb-3" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => {})} className="space-y-5">
          <Setting
            form={form}
            name="firstName"
            label="First name"
            placeholder="John"
            description="This is the first name that will be displayed on your profile
                  and in emails."
            type="text"
          />
          <Setting
            form={form}
            name="lastName"
            label="Last name"
            placeholder="Doe"
            description="This is the last name that will be displayed on your profile
                  and in emails."
            type="text"
          />
          <Setting
            form={form}
            name="birthDate"
            label="Date of birth"
            placeholder="Select a date"
            description="Your date of birth is used to calculate your age."
            type="birthDate"
          />
          <Setting
            form={form}
            name="language"
            label="Language"
            placeholder="Select a language"
            description="This is the language that will be used in the dashboard."
            type="select"
            data={[{ value: "english", label: "English" }]}
          />
          <div className="flex sm:justify-start">
            <Button type="submit" className="mr-2">
              Save
            </Button>
            <Button
              type="reset"
              variant={"outline"}
              onClick={() => {
                form.reset({
                  firstName: user?.firstName?.toString(),
                  lastName: user?.lastName?.toString(),
                });
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
