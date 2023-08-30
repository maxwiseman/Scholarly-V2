"use client";

import { LinkButton } from "@/src/components/ui/button";
import { Separator } from "@/src/components/ui/separator";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <div className="m-8 mb-8">
        <div className="flex gap-3 mb-3 flex-col">
          <h1 className="mt-0 text-2xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet</p>
        </div>
        <Separator />
        <div className="flex flex-col lg:flex-row my-8 gap-8 max-w-full">
          <div className="grow flex flex-wrap lg:flex-col gap-1 lg:max-w-xs">
            <LinkButton
              variant={pathname == "/app/settings" ? "secondary" : "ghost"}
              className="lg:justify-start lg:w-full"
              href="/app/settings"
            >
              Account
            </LinkButton>
            <LinkButton
              variant={
                pathname == "/app/settings/profile" ? "secondary" : "ghost"
              }
              className="lg:justify-start lg:w-full"
              href="/app/settings/profile"
            >
              Profile
            </LinkButton>
            <LinkButton
              variant={
                pathname == "/app/settings/appearance" ? "secondary" : "ghost"
              }
              className="lg:justify-start lg:w-full"
              href="/app/settings/appearance"
            >
              Appearance
            </LinkButton>
            <LinkButton
              variant={
                pathname == "/app/settings/notifications"
                  ? "secondary"
                  : "ghost"
              }
              className="lg:justify-start lg:w-full"
              href="/app/settings/notifications"
            >
              Notifications
            </LinkButton>
            <LinkButton
              variant={
                pathname == "/app/settings/display" ? "secondary" : "ghost"
              }
              className="lg:justify-start lg:w-full"
              href="/app/settings/display"
            >
              Display
            </LinkButton>
          </div>
          <div className="grow w-full max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
