import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Background } from '@/components/Background'
import { Space_Grotesk, Inter } from 'next/font/google'

const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const body = Inter({ subsets: ['latin'], variable: '--font-body' })

export const metadata = {
  title: 'AIPOD Studio',
  description: 'Tools for POD owners: book covers, coloring books, t-shirt designs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} font-sans`}>        
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen relative flex flex-col">
            <Background />
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
