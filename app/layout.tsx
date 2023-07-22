import './globals.css'
import type { Metadata } from 'next'
import {Urbanist} from 'next/font/google'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import {ThemeProvider} from "@/providers/ThemeProvider";
import ModalProvider from "@/providers/ModalProvider";

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jordan H.H. Portfolio',
  description: 'Jordan H.H. Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={urbanist.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider />
          <NavBar />
          {children}
          <Footer />
      </ThemeProvider>
      </body>
    </html>
  )
}
