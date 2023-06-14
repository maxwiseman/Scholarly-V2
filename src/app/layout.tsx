// src/app/layout.tsx
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from './providers'
import { Toaster } from '../components/ui/toaster'

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
        <html lang='en' className={'h-[100%] '}>
          <body className='h-[100%]'>
            {children} <Toaster />
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  )
}
