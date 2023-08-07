"use client";

import { Separator } from "@/src/components/ui/separator";
import PageWrapper from "../pagewrapper";
import { Button } from "@/src/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/src/components/ui/card";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import NewModal from "./newModal";

export default function Page() {
  return (
    <PageWrapper>
      <div className="m-8">
        <div className="flex justify-between items-center mx-2">
          <h1 className="mt-0 text-4xl font-bold">Read</h1>
          <NewModal>
            <Button>
              <IconPlus className="w-4 h-4" />
              New
            </Button>
          </NewModal>
        </div>
        <Separator className="my-4" />
        <Link href={"/read/chapter1"}>
          <Card className="min-h-32 p-5">
            <div className="flex gap-2 flex-col">
              <CardTitle className="text-lg">Chapter 1</CardTitle>
              <CardDescription className="line-clamp-3">
                Aliqua Lorem reprehenderit minim nulla quis. Nostrud eu magna
                duis deserunt non pariatur eu eu. Officia cupidatat aliquip eu
                ipsum officia mollit deserunt exercitation ex id officia.
                Consectetur ut ullamco et deserunt excepteur culpa ex. Aliqua
                anim laborum commodo quis in laborum non. Laborum sint ut esse
                quis labore eiusmod incididunt consectetur. In sint est
                excepteur aliquip voluptate. Aliqua Lorem reprehenderit minim
                nulla quis. Nostrud eu magna duis deserunt non pariatur eu eu.
                Officia cupidatat aliquip eu ipsum officia mollit deserunt
                exercitation ex id officia. Consectetur ut ullamco et deserunt
                excepteur culpa ex. Aliqua anim laborum commodo quis in laborum
                non. Laborum sint ut esse quis labore eiusmod incididunt
                consectetur. In sint est excepteur aliquip voluptate.
              </CardDescription>
            </div>
          </Card>
        </Link>
      </div>
    </PageWrapper>
  );
}
