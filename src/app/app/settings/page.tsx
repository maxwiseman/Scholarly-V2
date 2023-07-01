"use client";

import { Button } from "@/src/components/ui/button";
import { useToast } from "@/src/components/ui/use-toast";
import PageWrapper from "../pagewrapper";
import { Separator } from "@/src/components/ui/separator";
import { AccountSettings } from "./account";

export default function Settings() {
  return (
    <PageWrapper>
      <div className="m-8">
        <div className="flex gap-3 mb-3 flex-col">
          <h1 className="mt-0 text-4xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Lorem ipsum dolor sit amet</p>
        </div>
        <Separator />
        <div className="flex m-8 gap-8">
          <div className="">
            <Button variant={"secondary"}>Account</Button>
          </div>
          <div className="grow">
            <AccountSettings />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
