import './globals.css'
import type { Metadata } from 'next'
import {Urbanist} from 'next/font/google'
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import {Toaster} from "@/components/ui/toaster";

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
    <html lang="es" suppressHydrationWarning className={urbanist.className}>
      <body>
      <Providers>
          <NavBar />
          {children}
          <Footer />
          <Toaster />
      </Providers>
      </body>
    </html>
  )
}
