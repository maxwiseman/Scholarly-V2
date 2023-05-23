'use client'

import { useState } from 'react'
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Input,
} from '@mantine/core'
import { ThemeToggle } from '../../components/themeToggle'
import { IconSearch } from '@tabler/icons-react'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      padding='md'
      layout='alt'
      navbar={
        <Navbar width={{ base: 300 }} p='xs'>
          Application navbar
        </Navbar>
      }
      styles={theme => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  )
}

export default function Layout2({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
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
      navbarOffsetBreakpoint='sm'
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p='md'>
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

            <Group position='apart' w={'100%'}>
              <Group spacing={'md'}>
                <Text>Application navbar</Text>
                <Text>Application navbar</Text>
              </Group>
              <Group spacing={'md'}>
                <Input
                  placeholder='Search'
                  variant='filled'
                  radius={'md'}
                  icon={<IconSearch size={14} />}
                />
                <ThemeToggle />
              </Group>
            </Group>
          </div>
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}
