import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { Background } from '@/components/Background'
import { Inter, JetBrains_Mono } from 'next/font/google'

const ui = Inter({ subsets: ['latin'], variable: '--font-ui' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'AIPOD Studio',
  description: 'Tools for POD owners: book covers, coloring books, t-shirt designs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ui.variable} ${mono.variable} font-sans`}>        
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
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
