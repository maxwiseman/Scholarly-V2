import './globals.css'
import Providers from './providers'

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
    <Providers>
      <html lang='en' className='h-[100%]'>
        <body className='h-[100%]'>{children}</body>
      </html>
    </Providers>
  )
}
