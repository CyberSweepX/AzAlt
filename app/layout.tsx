import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  metadataBase: new URL('https://az-alt.vercel.app'),
  title: 'AzAlt — Pulsuz Proqram Alternativləri',
  description:
    'Azərbaycan üçün ödənişli proqramların pulsuz və açıq mənbəli alternativləri kataloqu.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'AzAlt — Pulsuz Proqram Alternativləri',
    description:
      'Azərbaycan üçün ödənişli proqramların pulsuz və açıq mənbəli alternativləri kataloqu.',
    url: 'https://az-alt.vercel.app',
    siteName: 'AzAlt',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AzAlt Banner',
      },
    ],
    locale: 'az_AZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AzAlt — Pulsuz Proqram Alternativləri',
    description:
      'Azərbaycan üçün ödənişli proqramların pulsuz və açıq mənbəli alternativləri kataloqu.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1e1e2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="az" className={`dark ${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
