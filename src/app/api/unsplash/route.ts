import { NextRequest } from 'next/server'

const url =
  'https://api.unsplash.com/photos/random?topics=6sMVjTLSkeQ,M8jVbLbTRws,bo8jQKTaE0Y,CDwuwXJAbEw,Fzo3zuOHN6w,xHxYTMHLgOc,iUIsnVtjB0Y,hmenvQhUmxM,Jpg6Kidl-Hk&content_filter=high'

export async function GET(req: NextRequest) {
  var image = await fetch(url, {
    headers: {
      Authorization: 'Client-ID ' + process.env.UNSPLASH_ACCESS_KEY,
    },
    cache: 'no-cache',
  }).then(res => res.json())

  return new Response(JSON.stringify(image), { status: 200 })
}
