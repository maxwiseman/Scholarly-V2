'use client'

import { createContext, useEffect, useState } from 'react'
import { getToken } from '../lib/hooks'
import { useAuth } from '@clerk/nextjs'
import { ToastProvider } from '@/src/components/ui/toast'
import { Toaster } from '../components/ui/toaster'

export const TokenContext = createContext('test')

export function Providers({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<any>()
  const auth = useAuth()
  useEffect(() => {
    getToken(auth.userId).then(res => {
      setToken(res)
    })
  })

  return (
    <TokenContext.Provider value={token}>
      {children}
      {/* <Toaster /> */}
    </TokenContext.Provider>
  )
}
