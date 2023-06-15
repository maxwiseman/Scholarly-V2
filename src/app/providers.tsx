'use client'

import { createContext, useEffect, useState } from 'react'
import { getToken } from '../lib/hooks'
import { useAuth } from '@clerk/nextjs'

export const TokenContext = createContext('')

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark' | ''>('light')
  const [token, setToken] = useState<string | null>()
  const auth = useAuth()

  useEffect(() => {
    setTheme(
      window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light'
    )
  }, [])
  useEffect(() => {
    getToken(auth.userId).then(res => {
      setToken(res)
    })
  })

  return (
    <TokenContext.Provider value={token as string}>
      <html lang='en' className={'h-[100%] ' + theme}>
        {children}
      </html>
    </TokenContext.Provider>
  )
}
