'use client'

import { TokenContext } from '@/src/app/providers'
import PageWrapper from '../../pagewrapper'
import { useContext } from 'react'
import { useCourses } from '@/src/lib/hooks'
import { Course } from '@/src/lib/types'
import { Badge } from '@/src/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/src/components/ui/tooltip'
import Image from 'next/image'
import { Button, LinkButton } from '@/src/components/ui'
import {
  IconChevronRight,
  IconComponents,
  IconDotsVertical,
  IconNotebook,
} from '@tabler/icons-react'
import { AvatarStack } from '@/src/components/avatarStack'

export default function Class({ params }: { params: { id: string } }) {
  const { data, isLoading } = useCourses(params.id) as {
    data: Course
    isLoading: boolean
  }
  console.log(data)
  return (
    <PageWrapper>
      <div
        className='h-80 relative w-full'
        style={{ backgroundColor: data?.course_color }}
      >
        {data?.image_download_url ? (
          <Image
            className='object-cover object-center'
            alt='Course Image'
            fill
            src={data?.banner_image_download_url || data?.image_download_url}
          />
        ) : (
          <></>
        )}
      </div>
      <div className='m-8'>
        <div className='flex items-center justify-between w-full'>
          <h1 className='mt-0 text-4xl font-bold'>
            {data ? data.name : 'Loading...'}
          </h1>
          <Button variant={'ghost'} className='w-9 p-2' size={'sm'}>
            <IconDotsVertical className='h-4 w-4' />
          </Button>
        </div>
        <AvatarStack people={data?.teachers} />
        {data?.public_description && <p>{data.public_description}</p>}
        <div className='flex flex-col gap-2'>
          <LinkButton
            href={`./${params.id}/assignments`}
            variant={'outline'}
            className='justify-between w-full'
          >
            <div className='flex flex-row items-center'>
              <IconNotebook className='h-4 w-4 mr-2' />
              Assignments
            </div>
            <IconChevronRight className='h-4 w-4' />
          </LinkButton>
          <LinkButton
            href={`./${params.id}/modules`}
            variant={'outline'}
            className='justify-between w-full'
          >
            <div className='flex flex-row items-center'>
              <IconComponents className='h-4 w-4 mr-2' />
              Modules
            </div>
            <IconChevronRight className='h-4 w-4' />
          </LinkButton>
        </div>
      </div>
    </PageWrapper>
  )
}
