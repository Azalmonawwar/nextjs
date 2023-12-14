import type { Metadata } from 'next'

import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '../components/Footer'
import NextTopLoader from 'nextjs-toploader';
const poppins = Poppins({ weight: ['200', '300', '400', '500', '600', '700'], subsets: ['latin'] })

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




      <body className={poppins.className}>
        <NextTopLoader
          color='#000000' />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
