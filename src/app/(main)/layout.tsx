import Navbar from './components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'María Barriga',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className=' lg:w-[90%] xl:w-[98%] lg:m-auto mx-[16px]'>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
