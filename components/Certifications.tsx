"use client"

import Image from "next/image"
import { motion, easeOut } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
}

export default function Certifications() {
  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.p
        variants={itemVariants}
        className="section-eyebrow text-center"
      >
        Fig. 07 — Certifications
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-display"
      >
        Certifications
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-sm text-muted-foreground mb-12 text-center max-w-2xl mx-auto font-mono tracking-wide"
      >
        Techwiz 2023 — Certificate of Participation
      </motion.p>

      <motion.div
        variants={itemVariants}
        className="max-w-xl mx-auto bg-card p-6 rounded-lg border border-border/50"
      >
        <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
          <Image
            src="/certificates/aptech-certificate.jpg"
            alt="ACE+AL Techwiz 4 - Certificate of Participation"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>
        <p className="text-center text-muted-foreground mt-4 font-mono text-xs tracking-wide">
          ACE+AL Techwiz 4 — Certificate of Participation
        </p>
      </motion.div>
    </motion.div>
  )
}
