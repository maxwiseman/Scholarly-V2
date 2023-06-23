'use client'

import { IconHome, IconNotebook, IconSettings } from '@tabler/icons-react'
import { NavButton, NavCollapsibleButton } from './navButton'
import { useCourses } from '@/src/lib/hooks'
import { Course } from '@/src/lib/types'

export default function Navbar() {
  const { data, isLoading } = useCourses() as {
    data: Course[]
    isLoading: boolean
  }

  return (
    <nav className='fixed p-5 left-0 z-39 h-full border-r bg-background min-w-[18rem] max-w-[18rem]'>
      <NavButton href='/app/home' icon={<IconHome />}>
        Home
      </NavButton>
      <NavCollapsibleButton
        links={
          !isLoading && data && data[0]
            ? data.map((course: any) => {
                return { id: course.id, text: course.name }
              })
            : [{ id: '', text: 'Loading...' }]
        }
        icon={<IconNotebook />}
        href='/app/courses'
      >
        Classes
      </NavCollapsibleButton>
      <NavButton href='/app/settings' icon={<IconSettings />}>
        Settings
      </NavButton>
    </nav>
  )
}
