'use client'

import { Stack, Text } from '@mantine/core'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { useForm } from '@mantine/form'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IconLoader } from '@tabler/icons-react'
import { Blurhash } from 'react-blurhash'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

export function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: value => (value != '' ? null : 'Enter a password'),
    },
  })
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  return (
    <>
      <form
        onSubmit={form.onSubmit(async values => {
          setLoading(true)
          var res = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
          })
          setLoading(false)
          res?.status == 401
            ? form.setErrors({
                email: 'Email or password is incorrect',
                password: 'Email or password is incorrect',
              })
            : null
        })}
      >
        <Stack maw={400}>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              placeholder='example@example.com'
              disabled={loading}
              id='email'
              type='email'
              // @ts-ignore
              style={
                form.errors.email
                  ? { '--input': '0 100% 50%', color: 'hsl(0 100% 50%)' }
                  : null
              }
              {...form.getInputProps('email')}
            />
          </div>
          <Stack spacing={0}>
            <div className='grid w-full items-center gap-1.5'>
              <Label htmlFor='password'>Password</Label>
              <Input
                placeholder='securepassword123'
                type='password'
                disabled={loading}
                id='password'
                // @ts-ignore
                style={
                  form.errors.password
                    ? { '--input': '0 100% 50%', color: 'hsl(0 100% 50%)' }
                    : null
                }
                {...form.getInputProps('password')}
              />
              <p className='text-xs text-muted-foreground'>
                Forgot your password?{' '}
                <Link target='blank' href={'./forgot'}>
                  Click here
                </Link>
              </p>
            </div>
          </Stack>
          <Button type='submit' disabled={loading}>
            {loading ? <IconLoader className='h-4 w-4 animate-spin' /> : null}
            Submit
          </Button>
        </Stack>
      </form>
    </>
  )
}

export default function LoginPage() {
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
      <div className='flex flex-row max-w-[100vw] h-[100%]'>
        <div className='flex-col p-8 rounded-lg h-[100%] grow lg:min-w-[500px] max-w-[100vw] flex justify-center items-center'>
          <Stack spacing={0} maw={400}>
            <h1 className='mt-0 mb-5 font-bold leading-tight text-4xl'>
              Welcome back to {process.env.NEXT_PUBLIC_APP_NAME}
            </h1>
            <p className='text-muted-foreground'>
              {
                "Let's get you signed in. Please enter your details. If you don't have an account, you can make one."
              }
            </p>
          </Stack>
          <Tabs defaultValue='login' className='w-[400px]'>
            <TabsList className='w-[100%] mb-4 mt-4'>
              <TabsTrigger className='grow' value='login'>
                Sign in
              </TabsTrigger>
              <TabsTrigger className='grow' value='signup'>
                Sign up
              </TabsTrigger>
            </TabsList>
            <TabsContent value='login'>
              <Login />
            </TabsContent>
            <TabsContent value='signup'>
              <Signup />
            </TabsContent>
          </Tabs>
        </div>
        <div className='w-0 hidden lg:block lg:w-[75vw] h-[100%] max-h-[100%] relative'>
          <p className='absolute right-0 bottom-0 p-5 z-50 text-white text-right'>
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
              className='object-center object-cover max-h-[100vh] w-[100%] h-[100%] absolute'
            />
          ) : null}
        </div>
      </div>
    </>
  )
}

function Signup() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: value => (value != '' ? null : 'Enter a password'),
    },
  })
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()

  return (
    <>
      <form
        onSubmit={form.onSubmit(async values => {
          setLoading(true)
          var res = await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
          })
          setLoading(false)
          res?.status == 401
            ? form.setErrors({
                email: 'Email or password is incorrect',
                password: 'Email or password is incorrect',
              })
            : null
        })}
      >
        <Stack maw={400}>
          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              placeholder='example@example.com'
              disabled={loading}
              id='email'
              type='email'
              // @ts-ignore
              style={
                form.errors.email
                  ? { '--input': '0 100% 50%', color: 'hsl(0 100% 50%)' }
                  : null
              }
              {...form.getInputProps('email')}
            />
          </div>
          <Stack spacing={0}>
            <div className='grid w-full items-center gap-1.5'>
              <Label htmlFor='password'>Password</Label>
              <Input
                placeholder='securepassword123'
                type='password'
                disabled={loading}
                id='password'
                // @ts-ignore
                style={
                  form.errors.password
                    ? { '--input': '0 100% 50%', color: 'hsl(0 100% 50%)' }
                    : null
                }
                {...form.getInputProps('password')}
              />
            </div>
          </Stack>
          <Button type='submit' disabled={loading}>
            {loading ? <IconLoader className='h-4 w-4 animate-spin' /> : null}
            Submit
          </Button>
        </Stack>
      </form>
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
