'use client'

import NavbarNested from '@/src/components/navbar'
import {
  AppShell,
  Burger,
  Group,
  Header,
  Input,
  MediaQuery,
  useMantineTheme,
} from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ThemeToggle } from '../../components/themeToggle'

export default function Layout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const session = useSession()
  const router = useRouter()

  if (session.status == 'unauthenticated') {
    router.push('/login')
  }

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      layout='default'
      navbarOffsetBreakpoint='sm'
      navbar={<NavbarNested opened={opened} setOpened={setOpened} />}
      header={
        process.env.NEXT_PUBLIC_HEADER_HIDDEN == 'true' ? (
          <></>
        ) : (
          <Header height={{ base: 50, md: 70 }} px='md'>
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened(o => !o)}
                  size='sm'
                  color={theme.colors.gray[6]}
                  mr='xl'
                />
              </MediaQuery>

              <Group
                position='apart'
                w={'100%'}
                h={'min-content'}
                noWrap
                style={{ overflow: 'hidden' }}
              >
                <Group spacing={'md'} noWrap mih={30} w={268} pos={'relative'}>
                  <Image
                    src={process.env.NEXT_PUBLIC_APP_LOGO as string}
                    alt={process.env.NEXT_PUBLIC_APP_NAME + ' Logo'}
                    fill
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                      filter:
                        theme.colorScheme == 'dark' ? 'invert(1)' : 'none',
                    }}
                  />
                </Group>
                <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
                  <Group spacing={'md'} noWrap>
                    <Input
                      placeholder='Search'
                      variant='filled'
                      radius={'md'}
                      icon={<IconSearch size={14} />}
                    />
                    <ThemeToggle />
                  </Group>
                </MediaQuery>
              </Group>
            </div>
          </Header>
        )
      }
    >
      {children}
    </AppShell>
  )
}