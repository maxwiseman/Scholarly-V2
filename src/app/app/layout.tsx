import Navbar from './navbar'
import PageWrapper from './pagewrapper'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex flex-col w-full h-full'>
        <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full h-16 border-b bg-background/95 backdrop-blur'>
          Header
        </header>
        <div className='flex flex-row gap-0 h-full'>
          <Navbar />
          <div className='min-w-[18rem]' />
          <div className='grow m-8 h-full w-full'>
            <PageWrapper>{children}</PageWrapper>
          </div>
        </div>
      </div>
    </>
  )
}
