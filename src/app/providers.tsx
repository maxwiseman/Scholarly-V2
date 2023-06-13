'use client'

import { createContext, useEffect, useState } from 'react'
import { getToken } from '../lib/hooks'
import { useAuth } from '@clerk/nextjs'

export const TokenContext = createContext('test')

export function Providers({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<any>()
  const auth = useAuth()
  useEffect(() => {
    getToken(auth.userId).then(res => {
      setToken(res)
    })
  })

  return <TokenContext.Provider value={token}>{children}</TokenContext.Provider>
}
