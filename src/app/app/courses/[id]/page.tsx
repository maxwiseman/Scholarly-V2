'use client'

import { TokenContext } from '@/src/app/providers'
import PageWrapper from '../../pagewrapper'
import { useContext } from 'react'
import { useCourses } from '@/src/lib/hooks'
import { Course } from '@/src/lib/types'

export default function Class({ params }: { params: { id: string } }) {
  const { data, isLoading } = useCourses(params.id) as {
    data: Course
    isLoading: boolean
  }
  console.log(data)
  return (
    <PageWrapper>
      <h1 className='mt-0 text-4xl font-bold'>
        {data ? data.name : 'Loading...'}
      </h1>
    </PageWrapper>
  )
}
