import { NextRequest } from 'next/server'

const url = 'https://api.unsplash.com/photos/random?topics=6sMVjTLSkeQ'

export async function GET(req: NextRequest) {
  var image = await fetch(url, {
    headers: {
      Authorization: 'Client-ID ' + process.env.UNSPLASH_ACCESS_KEY,
    },
    cache: 'no-cache',
  }).then(res => res.json())

  return new Response(JSON.stringify(image), { status: 200 })
}
