'use client'

import { Button } from '@mantine/core'
import { Metadata } from 'next'
import Link from 'next/link'
import PageWrapper from './pagewrapper'

// export const metadata: Metadata = {
//   title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

export default function Page() {
  return (
    <PageWrapper>
      <h1 className='mt-0'>Test Page</h1>
      <Button component={Link} href={'/app/classes'}>
        Test
      </Button>
    </PageWrapper>
  )
}
