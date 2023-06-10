'use client'

import { Button } from '@/src/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from '../pagewrapper'

// export const metadata: Metadata = {
//   title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

export default function Page() {
  return (
    <PageWrapper>
      <h1 className='mt-0'>Home</h1>
      <Link href={'/app/classes'}>
        <Button>Test</Button>
      </Link>
    </PageWrapper>
  )
}
