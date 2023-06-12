import { IconHome, IconNotebook, IconSettings } from '@tabler/icons-react'
import { NavButton, NavCollapsibleButton } from './navButton'

export default function Navbar() {
  return (
    <nav className='fixed p-5 left-0 z-39 h-full border-r bg-background min-w-[18rem] max-w-[18rem]'>
      <NavButton href='/app/home' icon={<IconHome />}>
        Home
      </NavButton>
      <NavCollapsibleButton
        links={[
          { href: '/app/classes/1', text: 'Class 1' },
          { href: '/app/classes/2', text: 'Class 2' },
        ]}
        icon={<IconNotebook />}
        href='/app/classes'
      >
        Classes
      </NavCollapsibleButton>
      <NavButton href='/app/settings' icon={<IconSettings />}>
        Settings
      </NavButton>
    </nav>
  )
}
