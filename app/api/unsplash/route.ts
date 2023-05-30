import { getServerSession } from 'next-auth/next'
import { authOptions } from '../../../pages/api/auth/[...nextauth]'
import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

const url = 'https://api.unsplash.com/photos/random?topic=nature'

export async function GET(req: NextRequest) {

  var image = await fetch(url, {
    headers: {
      Authorization: 'Client-ID ' + process.env.UNSPLASH_ACCESS_KEY,
    },
    cache: 'no-cache',
  }).then(res => res.json())

  return new Response(JSON.stringify(image))
}

interface Image {
  id: string
  created_at: string
  updated_at: string
  promoted_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  links: {
    self: string
    html: string
    download: string
    download_location: string
  }
  categories: []
  likes: number
  liked_by_user: boolean
  current_user_collections: []
  sponsorship: null
  user: {
    id: string
    updated_at: string
    username: string
    name: string
    first_name: string
    last_name: string
    twitter_username: string
    portfolio_url: string
    bio: string
    location: string
    links: {
      self: string
      html: string
      photos: string
      likes: string
      portfolio: string
      following: string
      followers: string
    }
    profile_image: {
      small: string
      medium: string
      large: string
    }
    instagram_username: string
    total_collections: number
    total_likes: number
    total_photos: number
    accepted_tos: boolean
    for_hire: boolean
  }
  exif: {
    make: string
    model: string
    exposure_time: string
    aperture: string
    focal_length: string
    iso: number
  }
  location: {
    title: string
    name: string
    city: string
    country: string
    position: {
      latitude: number
      longitude: number
    }
  }
  views: number
  downloads: number
}
