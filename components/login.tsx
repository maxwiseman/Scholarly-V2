'use client'

import { Stack, Text } from '@mantine/core'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { useForm } from '@mantine/form'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { IconLoader } from '@tabler/icons-react'
import Image from 'next/image'

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
          <Stack spacing={0} mb={'xs'}>
            <h1 className='mt-0 mb-5 font-bold leading-tight text-4xl'>
              Welcome back to {process.env.NEXT_PUBLIC_APP_NAME}
            </h1>
            <Text color={'dimmed'}>
              {"Let's get you signed in. Please enter your email and password."}
            </Text>
          </Stack>

          <div className='grid w-full items-center gap-1.5'>
            <Label htmlFor='email'>Email Address</Label>
            <Input
              placeholder='example@example.com'
              disabled={loading}
              id='email'
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
                Forgot your password? <Link href={'./forgot'}>Click here</Link>
              </p>
            </div>
          </Stack>
          <Button type='submit' disabled={loading}>
            {loading ? (
              <IconLoader className='h-4 w-4 animate-spin' />
            ) : null}
            Submit
          </Button>
        </Stack>
      </form>
    </>
  )
}

export default function LoginPage() {
  return (
    <>
      <div className='flex flex-row max-w-[100vw] h-[100%]'>
        <div className='p-8 rounded-lg h-[100%] grow lg:min-w-[500px] max-w-[100vw] flex justify-center items-center'>
          <Login />
        </div>
        <div className='w-0 lg:w-[75vw] max-h-[100%] relative'>
          <img
            src={
              'https://source.unsplash.com/random/2560x1440?nature,landscape'
            }
            alt='Credit: Unsplash'
            className='object-center object-cover max-h-[100vh] w-[100%] h-[100%]'
          />
        </div>
      </div>
    </>
  )
}
