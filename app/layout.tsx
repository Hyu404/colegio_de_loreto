import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Open_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Colegio De Loreto — Scientia ad Excellentiam',
  description:
    'Colegio De Loreto, Loreto, Agusan del Sur. A community college committed to excellence — offering programs in Agricultural Business, Technical-Vocational Teacher Education, Entrepreneurship, Public Administration, and Tourism Management.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#16276b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`light ${playfair.variable} ${openSans.variable}`}>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
