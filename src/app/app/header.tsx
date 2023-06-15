'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'
import { useClerk, useUser } from '@clerk/nextjs'
import { IconLogout, IconSettings, IconUser } from '@tabler/icons-react'
import Image from 'next/image'

export function Header() {
  // const user = useUser()
  const { signOut, user } = useClerk()

  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full h-16 border-b bg-background/95 backdrop-blur flex items-center px-5 py-2 justify-between'>
      <div>
        <div className='relative h-10 w-[15.25rem]'>
          <Image
            alt='Logo'
            fill
            src={process.env.NEXT_PUBLIC_APP_LOGO as string}
            className='dark:invert invert-0'
          />
        </div>
      </div>
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger className='focus-visible:outline-none'>
            <Avatar className='h-8 w-8 aspect-square flex justify-center items-center'>
              <AvatarImage src={user?.imageUrl} />
              <AvatarFallback>
                {/* @ts-ignore */}
                {user?.firstName?.charAt(0) +
                  // @ts-ignore
                  user?.lastName?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel className='pb-0'>
              {user?.fullName}
            </DropdownMenuLabel>
            <DropdownMenuLabel className='text-xs font-normal pt-0'>
              {user?.primaryEmailAddress?.emailAddress}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <IconSettings className='mr-2 h-4 w-4' />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem>
              <IconUser className='mr-2 h-4 w-4' />
              Profile
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                signOut()
              }}
            >
              <IconLogout className='mr-2 h-4 w-4' />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
