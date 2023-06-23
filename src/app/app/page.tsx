'use client'

import { useContext } from 'react'
import { TokenContext } from '../providers'
import { Button, useToast } from '@/src/components/ui'

// export const metadata: Metadata = {
//   title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

export default function Page() {
  const token = useContext(TokenContext)
  const { toast } = useToast()

  return (
    <>
      <h1 className='mt-0 text-4xl font-bold'>Test Page</h1>
      {/* @ts-ignore */}
      <p>{!false ? JSON.stringify(token) : 'Loading...'}</p>
      <Button
        onClick={() => {
          toast({
            title: 'Scheduled: Catch up',
            description: 'Friday, February 10, 2023 at 5:57 PM',
          })
        }}
      >
        Show Toast
      </Button>
    </>
  )
}
