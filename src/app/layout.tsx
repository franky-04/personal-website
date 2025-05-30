import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { siteConfig, generateMetadata } from '@/lib/seo-config'
import WorkInProgressBanner from '@/components/WorkInProgressBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = generateMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0070f3" />
        
        {/* Favicon personalizzata */}
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        
        {/* Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon/android-chrome-512x512.png" />
      </head>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
      <div id="root" className="min-h-screen">
        {/* Work in Progress Banner */}
        <WorkInProgressBanner />
        
        <header className="sticky top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
          {/* Navigation sarà aggiunta nella Fase 2 */}
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <Link href="/" className="font-bold text-xl">
              Giancarlo Urone
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
              <Link href="/skills" className="hover:text-blue-600 transition-colors">Skills</Link>
              <Link href="/experience" className="hover:text-blue-600 transition-colors">Experience</Link>
              <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </nav>
        </header>
        
        <main className=""> {/* Rimuovi pt-16 */}
          {children}
        </main>
          
          <footer className="bg-gray-50 border-t border-gray-200 py-8">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>&copy; 2024 Giancarlo Urone. All rights reserved.</p>
              <p className="mt-2">Full Stack Web Developer - Remote Available</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}