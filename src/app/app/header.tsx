"use client";

import { Input } from "@/src/components/ui";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  IconLogout,
  IconMoonStars,
  IconSearch,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  // const user = useUser()
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();

  return (
    <>
      <div className="h-16 w-full" />
      <header className="supports-backdrop-blur:bg-background/60 fixed top-0 z-40 w-full h-16 border-b bg-background/95 backdrop-blur flex items-center px-5 py-2 justify-between">
        <div>
          <div className="relative h-10 w-[15.25rem]">
            <Link href="/app">
              <Image
                alt="Logo"
                fill
                src={process.env.NEXT_PUBLIC_APP_LOGO as string}
                className="dark:invert invert-0"
              />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Input
            className="rouded-xl h-9"
            style={{ borderRadius: "var(--radius)" }}
            icon={<IconSearch />}
            placeholder="Search"
          />
          <DropdownMenu>
            <DropdownMenuTrigger className="focus-visible:outline-none">
              <Avatar className="h-8 w-8 aspect-square flex justify-center items-center">
                <AvatarImage src={session?.user?.image || ""} />
                <AvatarFallback>
                  {session?.user?.name
                    ?.split(" ")
                    .map((i) => {
                      return i.charAt(0);
                    })
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel className="pb-0">
                {session?.user?.name}
              </DropdownMenuLabel>
              <DropdownMenuLabel className="text-xs text-muted-foreground line-clamp-1 font-normal pt-0">
                {session?.user?.email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconSettings className="mr-2 h-4 w-4" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconUser className="mr-2 h-4 w-4" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <IconMoonStars className="mr-2 h-4 w-4" /> Theme
                </DropdownMenuSubTrigger>
                <DropdownMenuPortal>
                  <DropdownMenuSubContent>
                    <DropdownMenuCheckboxItem
                      checked={theme == "system"}
                      onClick={() => setTheme("system")}
                    >
                      {/* <IconDeviceDesktop className="mr-2 h-4 w-4" /> */}
                      System
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={theme == "light"}
                      onClick={() => setTheme("light")}
                    >
                      {/* <IconSun className="mr-2 h-4 w-4" /> */}
                      Light
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      checked={theme == "dark"}
                      onClick={() => setTheme("dark")}
                    >
                      {/* <IconMoon className="mr-2 h-4 w-4" /> */}
                      Dark
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuSubContent>
                </DropdownMenuPortal>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  signOut({ redirect: true, callbackUrl: "/" });
                }}
              >
                <IconLogout className="mr-2 h-4 w-4" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}
