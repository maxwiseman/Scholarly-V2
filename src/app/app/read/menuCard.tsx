"use client";

import { Card, CardDescription, CardTitle } from "@/src/components/ui";
import Link from "next/link";

export default function MenuCard(props: {
  title: string;
  description: string;
  href: string;
  class: string;
}) {
  return (
    <>
      <Link href={"/app/read/" + props.href}>
        <Card className="min-h-32 p-5">
          <div className="flex gap-2 flex-col">
            <div>
              <CardTitle className="text-lg m-0">{props.title}</CardTitle>
              <span className="text-xs text-muted-foreground font-semibold m-0">
                {props.class}
              </span>
            </div>
            <CardDescription className="line-clamp-3">
              {props.description.replace(/(<([^>]+)>)/gi, " ")}
            </CardDescription>
          </div>
        </Card>
      </Link>
    </>
  );
}
