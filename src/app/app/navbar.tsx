'use client'

import { IconHome, IconNotebook, IconSettings } from '@tabler/icons-react'
import { NavButton, NavCollapsibleButton } from './navButton'
import { useCourses } from '@/src/lib/hooks'
import { Course } from '@/src/lib/types'

export default function Navbar() {
  const { data, isLoading } = useCourses()

  return (
    <nav className='fixed p-5 left-0 z-39 h-full border-r bg-background min-w-[18rem] max-w-[18rem]'>
      <NavButton href='/app/home' icon={<IconHome />}>
        Home
      </NavButton>
      <NavCollapsibleButton
        links={
          !isLoading
            ? data.map(course => {
                return { href: `/app/classes/${course.id}`, text: course.name }
              })
            : [{ href: '/app/classes', text: 'Loading...' }]
        }
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
