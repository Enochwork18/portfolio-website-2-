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
import EmailJsLoader from "@/components/EmailJsLoader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Enoch Bismark - Creative Designer & Developer",
  description: "Enoch Bismark's professional portfolio showcasing UI/UX, graphic design, web development, and more.",
  openGraph: {
    title: "Enoch Bismark - Creative Designer & Developer",
    description: "Enoch Bismark's professional portfolio showcasing UI/UX, graphic design, web development, and more.",
    url: "https://portfolio-website-2-git-main-enochs-projects-58447181.vercel.app",
    siteName: "Enoch Bismark Portfolio",
    images: [
      {
        url: "https://portfolio-website-2-git-main-enochs-projects-58447181.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Enoch Bismark Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enoch Bismark - Creative Designer & Developer",
    description: "Enoch Bismark's professional portfolio showcasing UI/UX, graphic design, web development, and more.",
    images: ["https://portfolio-website-2-git-main-enochs-projects-58447181.vercel.app/twitter-image.png"],
  },
  // --- GOOGLE SEARCH CONSOLE VERIFICATION ---
  verification: {
    google: "qRSp5BKTjansSmm068w4kZ1o0_PPLyVc9JUkjEVAcG8", // Your unique Google verification code
  },
  // --- END VERIFICATION SECTION ---
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
          <EmailJsLoader />
        </ThemeProvider>
      </body>
    </html>
  )
}
