'use client'

import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import { useForm } from '@mantine/form'
import { IconLoader } from '@tabler/icons-react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SignUp as ClerkSignUp } from '@clerk/nextjs'

export function SignUp() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validate: {
      name: value => (value != '' ? null : 'Enter your name'),
      email: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: value => (value != '' ? null : 'Enter a password'),
    },
  })
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  return <ClerkSignUp />

  // return (
  //   <>
  //     <form
  //       onSubmit={form.onSubmit(async values => {
  //         setLoading(true)
  //         const res = await fetch('/api/sign-up', {
  //           method: 'POST',
  //           body: JSON.stringify({
  //             name: values.name,
  //             email: values.email,
  //             password: values.password,
  //           }),
  //         })
  //         await signIn('credentials', {
  //           email: values.email,
  //           password: values.password,
  //           redirect: false,
  //         })
  //         res?.status == 401
  //           ? form.setErrors({
  //               email: 'Email or password is incorrect',
  //               password: 'Email or password is incorrect',
  //             })
  //           : router.push('/app/home')
  //         setLoading(false)
  //       })}
  //     >
  //       <div className='flex flex-col gap-4 max-w-[400px]'>
  //         <div className='grid w-full items-center gap-1.5'>
  //           <Label htmlFor='name'>Full Name</Label>
  //           <Input
  //             className='text-primary'
  //             placeholder='John Doe'
  //             disabled={loading}
  //             id='name'
  //             // @ts-ignore
  //             style={
  //               form.errors.name
  //                 ? { '--input': '0 100% 50%', color: 'hsl(0 100% 50%)' }
  //                 : null
  //             }
  //             {...form.getInputProps('name')}
  //           />
  //         </div>
  //         <div className='grid w-full items-center gap-1.5'>
  //           <Label htmlFor='email'>Email Address</Label>
  //           <Input
  //             className='text-primary'
  //             placeholder='example@example.com'
  //             disabled={loading}
  //             id='email'
  //             type='email'
  //             // @ts-ignore
  //             style={
  //               form.errors.email
  //                 ? { '--input': '0 100% 50%', color: 'hsl(0 100% 50%)' }
  //                 : null
  //             }
  //             {...form.getInputProps('email')}
  //           />
  //         </div>
  //         <div className='flex flex-col gap-0'>
  //           <div className='grid w-full items-center gap-1.5'>
  //             <Label htmlFor='password'>Password</Label>
  //             <Input
  //               className='text-primary'
  //               placeholder='securepassword123'
  //               type='password'
  //               disabled={loading}
  //               id='password'
  //               // @ts-ignore
  //               style={
  //                 form.errors.password
  //                   ? { '--input': '0 100% 50%', color: 'hsl(0 100% 50%)' }
  //                   : null
  //               }
  //               {...form.getInputProps('password')}
  //             />
  //           </div>
  //         </div>
  //         <Button type='submit' disabled={loading}>
  //           {loading ? <IconLoader className='h-4 w-4 animate-spin' /> : null}
  //           Submit
  //         </Button>
  //       </div>
  //     </form>
  //   </>
  // )
}
