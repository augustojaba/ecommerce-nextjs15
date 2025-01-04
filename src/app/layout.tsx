import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next JS Ecommerce MVP",
  description: "Next JS Ecommerce MVP",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `bg-background min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`,
          geistSans,
          geistMono,
        )}
      >
        {children}
      </body>
    </html>
  )
}
