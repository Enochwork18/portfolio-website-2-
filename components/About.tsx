"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion, easeOut } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  }

  return (
    <section className="bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none opacity-[0.06]" />
      <div className="absolute inset-0 scanline-overlay" />
      <motion.div
        className="container mx-auto px-4 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          variants={itemVariants}
          className="section-eyebrow text-center text-muted-foreground"
        >
          Fig. 03 — About
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-12 text-center font-display text-foreground"
        >
          About Me
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <div className="relative cyber-border rounded-lg">
              <Image
                src="/about-image.png"
                alt="Developer's desk with code on screen"
                width={600}
                height={600}
                className="rounded-lg"
              />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-circuit/50" />
              <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-circuit/50" />
            </div>
          </motion.div>
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold mb-6 font-display text-foreground circuit-trace inline-block"
            >
              Frontend Developer &amp; Creative Engineer
            </motion.h3>
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed text-muted-foreground mb-6"
            >
              Frontend developer and aspiring creative engineer bridging design and code, with a foundation in graphic
              design that shapes how I think about interfaces. I build responsive, accessible web applications with React,
              Next.js, TypeScript, and Tailwind CSS, and am deepening my UI/UX practice through self-directed study in
              user research, wireframing, and prototyping. I have shipped production sites and platforms spanning
              manufacturing, enterprise AI, and creative-services brands, working comfortably across the full path from
              brand identity to deployed code. I am looking to grow under mentors who value the integration of design and
              engineering.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            >
              <motion.div variants={itemVariants}>
                <h4 className="text-lg font-semibold text-redline mb-3 font-mono tracking-wide flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-redline glow-redline" />
                  Contact
                </h4>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-circuit" />
                    <span>Oyo, Nigeria</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-circuit" />
                    <span>+234 913 627 7208</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-circuit" />
                    <Link href="mailto:etbismark@gmail.com" className="hover:text-circuit">
                      etbismark@gmail.com
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            <motion.blockquote
              variants={itemVariants}
              className="text-lg font-medium text-muted-foreground/80 border-l-4 border-redline pl-4 py-2 italic relative"
            >
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-redline to-transparent" />
              &ldquo;I believe great design speaks. I code to build what I imagine.&rdquo;
            </motion.blockquote>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
