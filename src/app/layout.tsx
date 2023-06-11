import './globals.css'
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
      <html lang='en' className={'h-[100%] dark'}>
        <body className='h-[100%]'>{children}</body>
      </html>
    </ClerkProvider>
  )
}
