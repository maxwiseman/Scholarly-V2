'use client'

import { TokenContext } from '@/src/app/providers'
import { useUser } from '@clerk/nextjs'
import { useContext } from 'react'
import useSWR from 'swr'

export function useCourses(id?: number | string) {
  const token = useContext(TokenContext)
  const { user } = useUser()
  const url = `/api/canvas/${user?.unsafeMetadata.district}/api/v1/courses`

  // @ts-ignore
  const fetcher = ([url, ...args]: any[]) =>
    fetch(url, ...args).then(res => res.json())
  const { data, isLoading, isValidating, error, mutate } = useSWR(
    [url + (id ? '/' + id : '') + '?access_token=' + token],
    fetcher
  )
  return { data, isLoading, isValidating, error, mutate }
}
