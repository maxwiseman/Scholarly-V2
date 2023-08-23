"use client";

import { Button, Input } from "@/src/components/ui";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/src/components/ui/command";
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
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
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
import { useState } from "react";

export function Header() {
  // const user = useUser()
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();
  const [searchOpen, setSearchOpen] = useState(false);

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
          {/* <Input placeholder="Search" icon={<IconSearch />} /> */}
          <Button
            className="flex min-w-[200px] gap-1 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-secondary-foreground disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground justify-start"
            variant={"outline"}
            style={{ borderRadius: "var(--radius)" }}
            onClick={() => {
              setSearchOpen(true);
            }}
          >
            <IconSearch className="q-4 h-4" />
            Search
          </Button>
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

        <CommandDialog open={searchOpen} onOpenChange={setSearchOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Launch</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                <span>Mail</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </header>
    </>
  );
}
