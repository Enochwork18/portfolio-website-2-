"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, easeOut } from "framer-motion"

export default function Hero() {
  const fullText = "Frontend Developer\n& Creative Engineer"
  const [displayed, setDisplayed] = useState("")
  const [phase, setPhase] = useState<"typing" | "pause-full" | "deleting" | "pause-empty">("typing")
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (phase === "typing") {
      if (idx < fullText.length) {
        timer = setTimeout(() => {
          setDisplayed(fullText.slice(0, idx + 1))
          setIdx(idx + 1)
        }, 50)
      } else {
        timer = setTimeout(() => setPhase("pause-full"), 2000)
      }
    } else if (phase === "pause-full") {
      timer = setTimeout(() => setPhase("deleting"), 2000)
    } else if (phase === "deleting") {
      if (idx > 0) {
        timer = setTimeout(() => {
          setDisplayed(fullText.slice(0, idx - 1))
          setIdx(idx - 1)
        }, 30)
      } else {
        timer = setTimeout(() => setPhase("pause-empty"), 1500)
      }
    } else if (phase === "pause-empty") {
      timer = setTimeout(() => {
        setPhase("typing")
        setIdx(0)
        setDisplayed("")
      }, 1500)
    }

    return () => clearTimeout(timer)
  }, [phase, idx, fullText])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  }

  return (
    <motion.div
      className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 py-24 relative scanline-overlay"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute inset-0 dot-grid pointer-events-none" />
      <div className="lg:w-1/2 text-center lg:text-left relative z-10">
        <motion.p variants={itemVariants} className="font-mono text-xs tracking-widest uppercase text-slate mb-4">
          Fig. 01 — Introduction
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-lg text-circuit font-semibold mb-3 font-mono tracking-wide inline-block cursor-default"
          whileHover={{ scale: 1.02, x: [0, -2, 2, -1, 1, 0], transition: { duration: 0.3 } }}
        >
          Hi, I&apos;m Bismark Enoch
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-4 font-display tracking-tight min-h-[1.2em]"
        >
          <span className="whitespace-pre-line">{displayed}</span>
          <motion.span
            className="inline-block w-[3px] h-[1em] bg-redline ml-1 align-middle"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        <motion.p variants={itemVariants} className="text-lg text-redline font-semibold mb-3 font-mono tracking-wide">
          UI/UX-Informed Graphic Designer
        </motion.p>
        <motion.p variants={itemVariants} className="text-base text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed">
          Frontend developer and creative engineer bridging design and code, building responsive, accessible web applications with React, Next.js, TypeScript, and Tailwind CSS.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
        >
          <Link href="/contact">
            <Button className="bg-redline hover:bg-redline/90 text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 glow-redline-lg">
              Contact Me
            </Button>
          </Link>
          <Link href="#my-work">
            <Button
              variant="outline"
              className="border-circuit text-circuit hover:bg-circuit hover:text-white font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 bg-transparent"
            >
              View My Work
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-end relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeOut, delay: 0.6 } }}
      >
        <Image
          src="/hero-image.png"
          alt="3D illustration of a developer"
          width={500}
          height={500}
          className="rounded-lg"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
