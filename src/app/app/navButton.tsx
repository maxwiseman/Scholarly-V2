"use client";

import { Button, LinkButton } from "@/src/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/src/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import { cn } from "@/src/lib/utils";
import { IconChevronDown, IconNotebook } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement, cloneElement, useState } from "react";
import { CourseSettings } from "./courseSettingsDialog";
import { Course } from "@/src/lib/types";
import { useUser } from "@clerk/nextjs";
import { useCourses } from "@/src/lib/hooks";
import { useColors } from "@/src/lib/hooks/useColors";

export function NavButton(props: {
  href: string;
  icon: ReactElement;
  children?: any;
}) {
  const pathname = usePathname();

  return (
    <LinkButton
      href={props.href}
      variant={pathname.startsWith(props.href) ? "default" : "ghost"}
      className="w-full justify-between mb-1"
    >
      <div className="flex flex-row gap-2 items-center">
        {cloneElement(props.icon, { className: "w-4 h-4" })}
        {props.children}
      </div>
    </LinkButton>
  );
}

export function NavCollapsibleButton(props: {
  links: { id: string; text: string }[];
  icon: ReactElement;
  href: string;
  children?: any;
}) {
  const [opened, setOpened] = useState(true);
  const pathname = usePathname();
  const user = useUser();

  return (
    <Collapsible open={opened} onOpenChange={setOpened} className="mb-1">
      <div>
        <CollapsibleTrigger asChild>
          <Button
            variant={pathname.startsWith(props.href) ? "default" : "ghost"}
            className="w-full justify-between mb-1"
          >
            <div className="flex flex-row gap-2 items-center">
              {cloneElement(props.icon, { className: "w-4 h-4" })}
              {props.children}
            </div>
            <IconChevronDown
              className={cn("w-4 h-4 transition-transform", {
                "transform rotate-180": opened,
              })}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-col gap-1 pl-5">
            {props.links.map((link) => {
              return (
                <Dialog key={link.id}>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <LinkButton
                        variant={
                          pathname.startsWith("/app/courses/" + link.id)
                            ? "secondary"
                            : "ghost"
                        }
                        size={"sm"}
                        className="w-full justify-start"
                        href={"/app/courses/" + link.id}
                      >
                        {link.text}
                      </LinkButton>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-64">
                      <ContextMenuItem>
                        <Link
                          className="hover:no-underline cursor-default"
                          href={"/app/courses/" + link.id}
                        >
                          Open
                        </Link>
                      </ContextMenuItem>
                      <DialogTrigger>
                        <ContextMenuItem>Course settings</ContextMenuItem>
                      </DialogTrigger>
                      <CourseSettings id={link.id} user={user?.user} />
                    </ContextMenuContent>
                  </ContextMenu>
                </Dialog>
              );
            })}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
