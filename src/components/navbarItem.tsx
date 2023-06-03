'use client'

import { Button, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import { ReactNode } from 'react'
import { usePathname } from 'next/navigation';

export default function NavItem({ children, href, icon }: {children: ReactNode, href: string, icon?: ReactNode}) {
  const pathname = usePathname()
  const theme = useMantineTheme()
  
  return (
    <>
      <Button
        fullWidth
        variant='light'
        color={pathname?.startsWith(href) ? theme.primaryColor : 'gray'}
        radius={'md'}
        size='sm'
        styles={(theme) => ({
          inner: {
            justifyContent: 'left',
          },
          label: !pathname?.startsWith(href)? {
            color: theme.colorScheme == 'light' ? theme.colors.gray[6] : theme.colors.gray[5]
          }:{},
          icon: !pathname?.startsWith(href)? {
            color: theme.colorScheme == 'light' ? theme.colors.gray[6] : theme.colors.gray[5]
          }:{},
          
        })}
        leftIcon={icon}
        component={Link}
        href={href}
      >
        {children}
      </Button>
    </>
  )
}
