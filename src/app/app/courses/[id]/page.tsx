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
import { Button } from '@/src/components/ui'
import { IconDotsVertical } from '@tabler/icons-react'

export default function Class({ params }: { params: { id: string } }) {
  const { data, isLoading } = useCourses(params.id) as {
    data: Course
    isLoading: boolean
  }
  console.log(data)
  return (
    <PageWrapper>
      <div className='h-80 relative w-full'>
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
        <div
          className={
            'flex flex-row mt-2 w-[' + data?.teachers?.length * 5 + 5 + 'px]'
          }
        >
          {data?.teachers?.map((teacher, index) => {
            if (index <= 2)
              return (
                <div key={index} className='ml-[-10px] translate-x-[10px]'>
                  <Tooltip>
                    <TooltipTrigger>
                      <Avatar
                        className={`z-[${
                          index + 1
                        }] bg-secondary aspect-square w-7 h-7 border-[1px] border-solid`}
                      >
                        <AvatarImage src={teacher.avatar_image_url} />
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {teacher?.display_name.split(' ').map(name => {
                        return (
                          name[0].toUpperCase() +
                          name.slice(1).toLowerCase() +
                          ' '
                        )
                      })}
                    </TooltipContent>
                  </Tooltip>
                </div>
              )
            else if (index === 3)
              return (
                <div key={index} className='ml-[-15px] translate-x-[15px]'>
                  <Tooltip>
                    <TooltipTrigger>
                      <Avatar className='aspect-square w-8 h-8'>
                        <AvatarFallback>
                          +{data.teachers.length - index}
                        </AvatarFallback>
                      </Avatar>
                    </TooltipTrigger>
                    <TooltipContent>
                      {data.teachers.length - index} more teachers
                    </TooltipContent>
                  </Tooltip>
                </div>
              )
          })}
        </div>
        {data?.public_description && <p>{data.public_description}</p>}
      </div>
    </PageWrapper>
  )
}
