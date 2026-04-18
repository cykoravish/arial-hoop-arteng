import type { Metadata, Viewport } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aerial Hoop Performer Luxembourg | Luxury Lyra Artist for Events",
  description:
    "Professional aerial hoop (lyra) performer based in Luxembourg. Specializing in bachelor parties, private events, and corporate shows. 12+ years of experience delivering unforgettable aerial performances.",
  keywords: [
    "Aerial Hoop Performer Luxembourg",
    "Lyra Artist Luxembourg",
    "Bachelor Party Entertainment Luxembourg",
    "Aerial Artist for Events",
    "Aerial Hoop Luxembourg",
    "Bachelorette Party Luxembourg",
    "Private Event Entertainment Luxembourg",
    "Corporate Entertainment Luxembourg",
  ],
  authors: [{ name: "Aerial Lyra Luxembourg" }],
  creator: "Aerial Lyra Luxembourg",
  openGraph: {
    type: "website",
    locale: "en_LU",
    title: "Aerial Hoop Performer Luxembourg | Luxury Lyra Artist",
    description:
      "Unforgettable aerial hoop performances for bachelor parties, private events, and corporate shows in Luxembourg. 12+ years of experience.",
    siteName: "Aerial Lyra Luxembourg",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial Hoop Performer Luxembourg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aerial Hoop Performer Luxembourg",
    description: "Unforgettable aerial hoop performances for bachelor parties and private events in Luxembourg.",
    images: ["/images/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-body antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
