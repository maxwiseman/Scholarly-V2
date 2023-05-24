'use client'

import { AppShell, Button, Navbar } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons-react'
import { Metadata } from 'next'
import Link from 'next/link'

// export const metadata: Metadata = {
//   title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

export default function Home() {
  return (
    <>
      <h1>Scholarly</h1>
      <Button
        component={Link}
        href={'app/home'}
        leftIcon={<IconExternalLink size={20} />}
      >
        Go to app
      </Button>
    </>
  )
}
