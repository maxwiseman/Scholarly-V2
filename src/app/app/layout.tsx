import PageWrapper from './pagewrapper'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex flex-col w-full h-full'>
        <div className='bg-gray-500 h-16 flex flex-row gap-5'>Header</div>
        <div className='flex flex-row gap-0 h-full'>
          <div className='bg-gray-300 h-full min-w-[18rem]'>Navbar</div>
          <div className='grow m-8 h-full w-full'>
            <PageWrapper>{children}</PageWrapper>
          </div>
        </div>
      </div>
    </>
  )
}
