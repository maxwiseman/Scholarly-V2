'use server'

import { db } from '@/src/database/db'
import { users } from '@/src/database/schema'
import { auth, useUser } from '@clerk/nextjs'
import { eq } from 'drizzle-orm'

export async function getToken(userId: string | undefined | null) {
  if (userId == undefined || userId == null) {
    console.error('No user ID provided to getToken() function!')
    return 'No user ID provided to getToken() function!'
  }
  const token = await db
    .select({
      id: users.id,
      canvas_api_token: users.canvas_api_token,
    })
    .from(users)
    // .where(eq(users.id, userId))
    .then(res => {
      return res[0]
    })
  return token.canvas_api_token
}
