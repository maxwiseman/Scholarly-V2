import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/src/components/ui/command";
import {
  IconAt,
  IconBook,
  IconDeviceDesktop,
  IconLogout,
  IconMoonStars,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { IconAlertOctagon, IconHome } from "@tabler/icons-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export function SearchCommand({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean | ((arg0: boolean) => boolean)) => void;
}) {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.key === "k" && (e.metaKey || e.ctrlKey)) ||
        (e.key === "p" && (e.metaKey || e.ctrlKey))
      ) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);
  const router = useRouter();

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                router.push("/app/home");
              });
            }}
          >
            <IconHome className="mr-2 h-4 w-4" />
            <span>Home</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                router.push("/app/missing");
              });
            }}
          >
            <IconAlertOctagon className="mr-2 h-4 w-4" />
            <span>Missing Assignments</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                router.push("/app/read");
              });
            }}
          >
            <IconBook className="mr-2 h-4 w-4" />
            <span>Read</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                router.push("/app/settings");
              });
            }}
          >
            <IconAt className="mr-2 h-4 w-4" />
            <span>Account</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                router.push("/app/settings/profile");
              });
            }}
          >
            <IconUser className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                router.push("/app/settings/appearance");
              });
            }}
          >
            <IconMoonStars className="mr-2 h-4 w-4" />
            <span>Appearance</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                router.push("/app/settings/display");
              });
            }}
          >
            <IconDeviceDesktop className="mr-2 h-4 w-4" />
            <span>Display</span>
          </CommandItem>
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                router.push("/app/settings");
              });
            }}
          >
            <IconSettings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Misc.">
          <CommandItem
            onSelect={() => {
              runCommand(() => {
                signOut({ redirect: true, callbackUrl: "/" });
              });
            }}
          >
            <IconLogout className="mr-2 h-4 w-4" />
            <span>Sign Out</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
