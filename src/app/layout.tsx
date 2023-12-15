import type { Metadata } from 'next'

import './globals.css'
import Header from '@/components/Header'


export const metadata: Metadata = {
  title: 'Booking.com',
  description: 'Personal project for portfolio - Booking clone - Scrape Data w/ Oxylabs, React, Shadcn, Tailwind, TS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  )
}
