import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'

const inter = Press_Start_2P({
  weight: '400',
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Circa 81',
  description: 'Web Development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
