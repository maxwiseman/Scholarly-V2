import { getServerSession } from 'next-auth'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs'
import { UnsplashImage } from './image'
import { Login } from './login'
import { Signup } from './signup'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = await getServerSession()
  if (session) {
    redirect('/app/home')
  }

  return (
    <>
      <div className='flex flex-row max-w-[100vw] h-[100%]'>
        <div className='flex-col p-8 rounded-lg h-[100%] grow lg:min-w-[500px] max-w-[100vw] flex justify-center items-center'>
          <div className='flex flex-col gap-0 max-w-[400px]'>
            <h1 className='mt-0 mb-5 font-bold leading-tight text-4xl'>
              Welcome back to {process.env.NEXT_PUBLIC_APP_NAME}
            </h1>
            <p className='text-muted-foreground'>
              {
                "Let's get you signed in. Please enter your details. If you don't have an account, you can make one."
              }
            </p>
          </div>
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
        <UnsplashImage className='w-0 hidden lg:block lg:w-[75vw] h-[100%] max-h-[100%] relative' />
      </div>
    </>
  )
}
