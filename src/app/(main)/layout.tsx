
import Navbar from './components/Navbar'
import './globals.css'
import type { Metadata } from 'next'

import { GlobalContextProvider } from './context/store'
export const metadata: Metadata = {
  title: 'María Barriga',
  description: 'My portfolio',
}
//className=' lg:w-[90%] xl:w-[98%] lg:m-auto mx-[16px]'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body >
      <GlobalContextProvider>
          <Navbar/>
          {children}
        </GlobalContextProvider>
        </body>
    </html>
  )
}
