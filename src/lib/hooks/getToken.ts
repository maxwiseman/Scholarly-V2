'use server'

import { db } from '@/src/database/db'
import { users } from '@/src/database/schema'
import { auth } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'

export async function getToken(userId: string | undefined | null) {
  // const { userId } = auth() // This causes an error:
  // ! Clerk: auth() and currentUser() are only supported in App Router (/app directory).
  // ! If you're using /pages, try getAuth() instead.

  if (userId == undefined || userId == null) {
    console.error('No user ID provided to getToken() function!')
    return 'No user ID provided to getToken() function!'
  }
  const token = await db
    .select({
      canvas_api_token: users.canvas_api_token,
    })
    .from(users)
    .where(eq(users.id, userId))
    .then(res => {
      if (res[0] == undefined) res = [{ canvas_api_token: 'No token found!' }]
      return res[0]
    })
  return token.canvas_api_token
}
