'use client'

import { Anchor, Badge, Button, Card, Center, Group, Stack, Text, TextInput } from "@mantine/core"
import { useForm } from "@mantine/form"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"

export function Signup() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: value => (value != '' ? null : 'Enter a password')
    },
  })
  const [loading, setLoading] = useState(false)
  const {data: session} = useSession()

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
          res?.status == 401 ? form.setErrors({email: 'Email or password is incorrect', password: 'Email or password is incorrect'}) : null
        })}
      >
        <Stack w={400}>
          <Stack spacing={0} mb={'xs'}>
            <h1 style={{ marginTop: 0, marginBottom: 0, display: 'flex', alignItems: 'center' }}>
              Welcome to {process.env.NEXT_PUBLIC_APP_NAME} {process.env.NEXT_PUBLIC_BETA == 'true' ? <Badge ml={'xs'}>Beta</Badge> : null}
            </h1>
            <Text color={'dimmed'}>{"Let's get your account set up. But first, what email and password should we use?"}</Text>
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
              placeholder='securepassword123'
              type='password'
              disabled={loading}
              {...form.getInputProps('password')}
            />
          </Stack>
          <Button type='submit' loading={loading}>Submit</Button>
          <Text color={'dimmed'} size={'xs'} mt={0} w={'100%'} align='center'>{"Already have an account? "}<Anchor component={Link} href={'/app/home'}>Sign in</Anchor></Text>
        </Stack>
      </form>
    </>
  )
}

export default function SignupPage() {
  return (
    <>
      <Center h={'100vh'}>
      <Card shadow="lg" w={'max-content'} withBorder p={'xl'} radius={'md'}>
        <Signup />
      </Card>
      </Center>
    </>
  )
}