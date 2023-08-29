"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useForm } from "@mantine/form";
import {
  IconBrandApple,
  IconBrandGithub,
  IconBrandGoogle,
  IconLoader,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Separator } from "@/src/components/ui/separator";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "@/src/components/ui";

export function SignIn({ redirectURL }: { redirectURL?: string }) {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) => (value != "" ? null : "Enter a password"),
    },
  });
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackUrl");

  return (
    <div>
      <div className="flex gap-5 items-center justify-between">
        <Button
          onClick={() => {
            signIn("github", {
              redirect: true,
              callbackUrl: callbackURL || "/app/home",
            });
          }}
          variant={"outline"}
          size={"icon"}
          className="h-12 grow"
        >
          <Image
            alt="Apple Logo"
            width={20}
            height={20}
            className="w-5 h-5 object-contain dark:invert"
            src="/logos/apple.svg"
          />
        </Button>
        <Button
          onClick={() => {}}
          variant={"outline"}
          size={"icon"}
          className="h-12 grow"
        >
          <Image
            alt="Apple Logo"
            width={20}
            height={20}
            className="w-5 h-5 object-contain dark:invert"
            src="/logos/github.svg"
          />
        </Button>
        <Button
          onClick={() => {}}
          variant={"outline"}
          size={"icon"}
          className="h-12 grow"
        >
          <Image
            alt="Apple Logo"
            width={20}
            height={20}
            className="w-5 h-5 object-contain dark:invert"
            src="/logos/google.svg"
          />
        </Button>
      </div>
      <div className="flex justify-center items-center flex-nowrap my-6 w-full">
        <Separator className="shrink" />
        <p className="mx-3 h-2 flex items-center justify-center text-muted-foreground">
          or
        </p>
        <Separator className="shrink" />
      </div>
      <form
        onSubmit={form.onSubmit(async (values) => {
          try {
            setLoading(true);
            signIn("credentials", {
              email: values.email,
              password: values.password,
              redirect: true,
              callbackUrl: callbackURL || "/app/home",
            });
          } catch (err: any) {
            console.error("error", err.errors[0].longMessage);
            toast({
              title: "Something went wrong!",
              description: err.errors[0].longMessage,
            });
            setLoading(false);
          }
        })}
      >
        <div className="flex flex-col gap-4 max-w-[400px]">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="email">Email Address</Label>
            <Input
              className="text-primary"
              placeholder="example@example.com"
              disabled={loading}
              id="email"
              type="email"
              // @ts-ignore
              style={
                form.errors.email
                  ? { "--input": "0 100% 50%", color: "hsl(0 100% 50%)" }
                  : null
              }
              {...form.getInputProps("email")}
            />
          </div>
          <div className="flex flex-col gap-0">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                className="text-primary"
                placeholder="securepassword123"
                type="password"
                disabled={loading}
                id="password"
                // @ts-ignore
                style={
                  form.errors.password
                    ? { "--input": "0 100% 50%", color: "hsl(0 100% 50%)" }
                    : null
                }
                {...form.getInputProps("password")}
              />
              <p className="text-xs text-muted-foreground">
                Forgot your password?{" "}
                <Link target="blank" href={"./forgot"}>
                  Click here
                </Link>
              </p>
            </div>
          </div>
          <Button type="submit" variant={loading ? "disabled" : "default"}>
            {loading ? <IconLoader className="h-4 w-4 animate-spin" /> : null}
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
