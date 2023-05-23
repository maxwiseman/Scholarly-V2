'use client'

import { AppShell, Button, Navbar } from '@mantine/core'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
}

export default function Home() {
  return (
    <AppShell       padding="md"
    navbar={<Navbar width={{ base: 300 }} p="xs">Navbar goes here</Navbar>}
    styles={(theme) => ({
      main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
    })}>
      <main className=''>
        <Button>Test Button</Button>
      </main>
    </AppShell>
  )
}
