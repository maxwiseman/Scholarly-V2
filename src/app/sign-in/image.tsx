'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Blurhash } from 'react-blurhash'

export function UnsplashImage({ ...props }) {
  const [image, setImage] = useState<Image | undefined>()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    fetch('/api/unsplash', { cache: 'reload' })
      .then(res => res.json())
      .then((res: Image) => {
        setImage(res)
        console.log('Random Unsplash Image: ', res)
        const img = new Image()
        img.onload = () => {
          setLoading(false)
        }
        img.src = res.urls.regular
      })
  }, [])
  const unsplashUTM =
    '?utm_source=' +
    process.env.NEXT_PUBLIC_UNSPLASH_NAME +
    '&utm_medium=referral&utm_campaign=api-credit'

  return (
    <>
      <div {...props}>
        <p className='absolute right-0 bottom-0 m-5 z-50 text-white text-right'>
          <Link
            target='_blank'
            href={'https://unsplash.com/photos/' + image?.id + unsplashUTM}
          >
            Photo
          </Link>{' '}
          by <br />
          <Link
            target='_blank'
            href={image?.user?.links.html + unsplashUTM || ''}
          >
            {image?.user.name}
          </Link>{' '}
          via{' '}
          <Link target='_blank' href={'https://unsplash.com' + unsplashUTM}>
            Unsplash
          </Link>
        </p>
        {image?.blur_hash && loading ? (
          <Blurhash
            hash={image?.blur_hash}
            width={'100%'}
            height={'100%'}
            className={'absolute'}
          />
        ) : null}
        {!loading ? (
          <img
            src={image?.urls?.regular}
            alt={image?.alt_description}
            // title={
            //   image?.location?.name ||
            //   image?.description ||
            //   image?.user?.username ||
            //   'Unsplash Image'
            // }
            className='object-center object-cover max-h-[100vh] w-[100%] h-[100%] absolute'
          />
        ) : null}
      </div>
    </>
  )
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
