import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lyntra',
  description: 'Discover the epitome of style at Lyntra, your go-to cloth store for fashion that speaks volumes. Explore a curated collection of trendy and timeless apparel, where quality meets comfort. Elevate your wardrobe with the latest in vogue, sourced with passion and tailored for individuality. Unleash your fashionista spirit at Lyntra – where every thread tells a unique story. Shop now and redefine your style journey with us!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
