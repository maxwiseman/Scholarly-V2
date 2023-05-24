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
  Button,
} from '@mantine/core'
import { ThemeToggle } from '../../components/themeToggle'
import { IconHome, IconNotebook, IconSearch } from '@tabler/icons-react'
import NavItem from '@/components/navbarItem'

export default function Layout({ children }: { children: React.ReactNode }) {
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
          <Group spacing={'xs'}>
          <NavItem href='/app/home' icon={<IconHome size={20} />}>Home</NavItem>
          <NavItem href='/app/classes' icon={<IconNotebook size={20} />}>Classes</NavItem>
          </Group>
        </Navbar>
      }
      header={
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
              <Group spacing={'md'} noWrap>
                <Text miw={'max-content'}>Application navbar</Text>
                <Text miw={'max-content'}>Application navbar</Text>
              </Group>
              <Group spacing={'md'} noWrap>
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
