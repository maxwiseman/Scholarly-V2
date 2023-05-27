'use client'

import { Button, TextInput, Stack, Text, Anchor, Center, Card } from '@mantine/core'
import { useForm } from '@mantine/form'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export function Login() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  const [loading, setLoading] = useState(false)
  const {data: session} = useSession()

  return (
    <>
      <form
        onSubmit={form.onSubmit(async values => {
          console.log('Signing in: ', values)
          setLoading(true)
          await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false,
          })
          setLoading(false)
        })}
      >
        <Stack w={400}>
          <Stack spacing={0} mb={'lg'}>
            <h1 style={{ marginTop: 0, marginBottom: 0 }}>
              Welcome back
            </h1>
            <Text color={'dimmed'}>Let's get you signed in. Please enter your email and password.</Text>
          </Stack>

          <TextInput
            label='Email Address'
            placeholder='example@example.com'
            disabled={loading}
            {...form.getInputProps('email')}
          />
          <Stack spacing={0}>
            <TextInput
              label='Password'
              type='password'
              disabled={loading}
              {...form.getInputProps('password')}
            />
            <Text color={'dimmed'} size={'xs'} mt={0}>
              Forgot your password?{' '}
              <Anchor component={Link} href={'/forgot'}>
                Click here
              </Anchor>
            </Text>
          </Stack>
          <Button type='submit' loading={loading}>Submit</Button>
        </Stack>
      </form>
    </>
  )
}

export default function LoginPage() {
  return(
    <>
      <Center h={'100vh'}>
      <Card shadow="md" w={'max-content'} withBorder p={'xl'} radius={'md'}>
        <Login />
      </Card>
      </Center>
    </>
  )
}
