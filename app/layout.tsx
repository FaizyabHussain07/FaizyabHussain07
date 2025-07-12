import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Faizyab Hussain - Professional Portfolio',
  description: 'Frontend Developer & Web Designer. Building modern, responsive websites and web apps.',
  keywords: ['portfolio', 'developer', 'web designer', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Faizyab Hussain' }],
  creator: 'Faizyab Hussain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faizyab-hussain07.vercel.app/',
    title: 'Faizyab Hussain - Professional Portfolio',
    description: 'Frontend Developer & Web Designer.',
    siteName: 'Faizyab Hussain Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faizyab Hussain - Professional Portfolio',
    description: 'Frontend Developer & Web Designer.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-slate-900 text-slate-100`}>
        <Navigation />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 