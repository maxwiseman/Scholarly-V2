"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Continue from "./continueButton";
import Motion from "./motion";
import { Badge } from "@/src/components/ui/badge";
import CircleBadge from "./circleBadge";
import Image from "next/image";
import { Button, Input, Label } from "@/src/components/ui";
import { Setting } from "../app/settings/setting";
import { IconClipboardText } from "@tabler/icons-react";
import { Combobox } from "@/src/components/ui/combobox";
import Link from "next/link";

export default function Step2({
  paginate,
  page,
}: {
  paginate: (arg0: number) => void;
  page: number;
}) {
  const [token, setToken] = useState("");

  return (
    <>
      <div className="justify-left space-y-2 w-full relative">
        <Label htmlFor="token">Canvas Access Token</Label>
        <div className="relative">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="text-muted-foreground w-6 h-6 absolute left-[calc(100%-0.375rem)] top-[50%] translate-x-[-100%] translate-y-[-50%] z-10"
            onClick={(element) => {
              navigator.clipboard.readText().then((text) => {
                setToken(text);
              });
            }}
          >
            <IconClipboardText className="w-4 h-4" />
          </Button>
          <Input
            value={token}
            onChange={(event) => setToken(event.target.value)}
            id="token"
            placeholder="Paste token here..."
          />
        </div>
        <p className="text-[0.8rem] text-muted-foreground">
          You can find this in Canvas settings
        </p>
      </div>
      <div className="justify-left space-y-2 w-full relative">
        <Label>Canvas District</Label>
        <Combobox
          data={[
            { value: "knox", label: "Knox County Schools" },
            {
              value: "university of tennessee",
              label: "University of Tennessee, Knoxville",
            },
          ]}
          placeholder="Select a district..."
          className="w-full"
        />
        <p className="text-[0.8rem] text-muted-foreground">
          {`If your district isn't listed, please click `}{" "}
          <Link href={"/request"} className="underline">
            here
          </Link>
        </p>
      </div>
      <Continue page={page} paginate={paginate} className={"w-full mt-2"} />
    </>
  );
}
