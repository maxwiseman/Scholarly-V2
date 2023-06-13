'use client'

import { db } from '@/src/database/db'
import { users } from '@/src/database/schema'
import { useCourses } from '@/src/lib/hooks'
import { getToken } from '@/src/lib/hooks/getToken'
import { useAuth } from '@clerk/nextjs'
import { useContext, useEffect, useState } from 'react'
import { TokenContext } from '../providers'

// export const metadata: Metadata = {
//   title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

export default function Page() {
  const auth = useAuth()
  const token = useContext(TokenContext)

  return (
    <>
      <h1 className='mt-0'>Test Page</h1>
      {/* @ts-ignore */}
      <p>{!false ? JSON.stringify(token) : 'Loading...'}</p>
    </>
  )
}
