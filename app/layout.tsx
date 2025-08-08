import './globals.css'
import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'

export const metadata = {
  title: 'AIPOD Studio',
  description: 'Tools for POD owners: book covers, coloring books, t-shirt designs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
