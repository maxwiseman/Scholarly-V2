import { db } from '@/src/database/db'
import PageWrapper from './pagewrapper'
import { users } from '@/src/database/schema'

// export const metadata: Metadata = {
//   title: 'Home - ' + process.env.NEXT_PUBLIC_APP_NAME,
// }

async function getData() {
  'use server'
  const res = await db
    .select({
      id: users.id,
      name: users.fullName,
    })
    .from(users)
  console.log(res[0])
  return JSON.stringify(res[0])
}

export default async function Page() {
  return (
    <PageWrapper>
      <h1 className='mt-0'>Test Page</h1>
      <p>{await getData()}</p>
    </PageWrapper>
  )
}
