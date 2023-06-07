import './globals.css'
import Providers from './providers'
import { ClerkProvider } from '@clerk/nextjs'

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: 'The Canvas replacement for the modern student.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang='en' className={'h-[100%] dark'}>
          <body className='h-[100%]'>{children}</body>
        </html>
      </Providers>
    </ClerkProvider>
  )
}
