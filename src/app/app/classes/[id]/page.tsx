'use client'

import PageWrapper from '../../pagewrapper'

export default function Class({ params }: { params: { id: string } }) {
  return (
    <PageWrapper>
      <h1 className='mt-0'>
        {params.id[0].toUpperCase() + params.id.substring(1)} Class
      </h1>
    </PageWrapper>
  )
}
