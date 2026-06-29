import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Bismark Enoch — Frontend Developer & Creative Engineer | UI/UX-Informed Graphic Designer",
  description:
    "Frontend developer and creative engineer bridging design and code. Builds responsive, accessible web apps with React, Next.js, TypeScript, and Tailwind CSS. Ships production sites spanning manufacturing, enterprise AI, and creative-services brands.",
  openGraph: {
    title: "Bismark Enoch — Frontend Developer & Creative Engineer | UI/UX-Informed Graphic Designer",
    description:
      "Frontend developer and creative engineer bridging design and code. Builds responsive, accessible web apps with React, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://portfolio-website-2-blue.vercel.app",
    siteName: "Bismark Enoch Portfolio",
    images: [
      {
        url: "https://portfolio-website-2-blue.vercel.app/hero-image.png",
        width: 1200,
        height: 630,
        alt: "Bismark Enoch — Frontend Developer & Creative Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bismark Enoch — Frontend Developer & Creative Engineer",
    description:
      "Frontend developer and creative engineer bridging design and code. Builds responsive, accessible web apps with React, Next.js, TypeScript, and Tailwind CSS.",
    images: ["https://portfolio-website-2-blue.vercel.app/hero-image.png"],
  },
  verification: {
    google: "qRSp5BKTjansSmm068w4kZ1o0_PPLyVc9JUkjEVAcG8",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn(inter.variable, spaceGrotesk.variable, jetbrainsMono.variable, "font-body antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <SpeedInsights />
            <Analytics />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
