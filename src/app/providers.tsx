'use client'

import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { Notifications } from '@mantine/notifications'
import { setCookie } from 'cookies-next'
import { useState } from 'react'

export default function Providers({ children }: { children: React.ReactNode }) {
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark')
    setColorScheme(nextColorScheme)
    setCookie('mantine-color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  // useEffect(() => {
  //   setColorScheme(getCookie('mantine-color-scheme') as 'dark'|'light' || preferredColorScheme)
  // }, [preferredColorScheme])

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Notifications />
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
