import { UserButton } from '@clerk/nextjs'
import { LinkButton } from '../components/ui/button'
import { IconExternalLink } from '@tabler/icons-react'

export default function Home() {
  return (
    <>
      <h1>Scholarly</h1>
      <LinkButton href='./app/home'>
        <IconExternalLink className='h-4 w-4' />
        Go to {process.env.NEXT_PUBLIC_APP_NAME}
      </LinkButton>
      <UserButton />
    </>
  )
}
