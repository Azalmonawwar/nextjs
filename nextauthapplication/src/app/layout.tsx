import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next auth app',
  description: 'A fully function authentication using next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" toastOptions={{
          // Define default options
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
          }
        }} />
        {children}
      </body>
    </html>
  )
}
