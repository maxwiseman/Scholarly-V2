import { NextRequest } from 'next/server'
import { prisma } from '../_base'
import { hash } from 'bcrypt'

export async function POST(req: NextRequest) {
  const body = await req.json()

  prisma.user
    .create({
      data: {
        name: body.name,
        email: body.email,
        emailVerified: true,
        password: await hash(body.password, 10),
      },
    })
    .catch(err => {
      console.log('Account creation error: ', err)
      return new Response(err, { status: 500 })
    })

  return new Response('Operation completed successfully', { status: 200 })
}
