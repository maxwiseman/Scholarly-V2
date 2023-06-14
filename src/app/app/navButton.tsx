'use client'

import { Button, LinkButton } from '@/src/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/src/components/ui/collapsible'
import { cn } from '@/src/lib/utils'
import { IconChevronDown, IconNotebook } from '@tabler/icons-react'
import { usePathname } from 'next/navigation'
import { ReactElement, cloneElement, useState } from 'react'

export function NavButton(props: {
  href: string
  icon: ReactElement
  children?: any
}) {
  const pathname = usePathname()

  return (
    <LinkButton
      href={props.href}
      variant={pathname.startsWith(props.href) ? 'default' : 'ghost'}
      className='w-full justify-between mb-1'
    >
      <div className='flex flex-row gap-2 items-center'>
        {cloneElement(props.icon, { className: 'w-4 h-4' })}
        {props.children}
      </div>
    </LinkButton>
  )
}

export function NavCollapsibleButton(props: {
  links: { href: string; text: string }[]
  icon: ReactElement
  href: string
  children?: any
}) {
  const [opened, setOpened] = useState(true)
  const pathname = usePathname()

  return (
    <Collapsible open={opened} onOpenChange={setOpened} className='mb-1'>
      <div>
        <CollapsibleTrigger asChild>
          <Button
            variant={pathname.startsWith(props.href) ? 'default' : 'ghost'}
            className='w-full justify-between mb-1'
          >
            <div className='flex flex-row gap-2 items-center'>
              {cloneElement(props.icon, { className: 'w-4 h-4' })}
              {props.children}
            </div>
            <IconChevronDown
              className={cn('w-4 h-4 transition-transform', {
                'transform rotate-180': opened,
              })}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className='flex flex-col gap-1 pl-5'>
            {props.links.map(link => {
              return (
                <LinkButton
                  variant={
                    pathname.startsWith(link.href) ? 'secondary' : 'ghost'
                  }
                  size={'sm'}
                  className='w-full justify-start'
                  href={link.href}
                  key={link.text}
                >
                  {link.text}
                </LinkButton>
              )
            })}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  )
}
