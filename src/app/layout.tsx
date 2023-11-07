import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  
  title: 'SpedX Exchange',
  description:     "Hybrid Orderbook-AMM DEX to trade Perpetuals and Zero-Day Futures with maximum capital efficiency",
  openGraph: {
    images: ["/og-image.png"],
    type:"website",
    locale: "en_IE",
    title: "SpedX Exchange",
    description: "Hybrid Orderbook-AMM DEX to trade Perpetuals and Zero-Day Futures with maximum capital efficiency",
    siteName: "SpedX Exchange",
  },
  twitter: {
    images: ["/og-image.png"],
    card: "summary_large_image",
    creator: "@spedxhq",
    site: "@spedxhq",
    title: "SpedX Exchange",
    description: "Hybrid Orderbook-AMM DEX to trade Perpetuals and Zero-Day Futures with maximum capital efficiency",    
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: "/favicon.ico",
  },
  themeColor: "#3BB078"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
