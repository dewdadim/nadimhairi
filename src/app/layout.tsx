import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './noise.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import SmoothScroll from '@/components/smooth-scroll'
import { Footer } from '@/components/footer'
import { animatePageOut } from '@/utils/animation'
import Cursor from '@/components/ui/cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nadim Hairi',
  description: 'Nadim is a developer and a designer.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="noise" />
            <SmoothScroll />
            <div className="flex-1 flex-grow">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
