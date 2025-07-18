import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import EmailJsLoader from "@/components/EmailJsLoader" // Import the new component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Enoch Bismark - Creative Designer & Developer",
  description: "Enoch Bismark's professional portfolio showcasing UI/UX, graphic design, web development, and more.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <SpeedInsights />
            <Analytics />
          </Suspense>
          {/* EmailJS script loaded via a Client Component */}
          <EmailJsLoader />
        </ThemeProvider>
      </body>
    </html>
  )
}
