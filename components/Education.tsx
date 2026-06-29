"use client"

import { GraduationCap } from "lucide-react"
import { motion, easeOut } from "framer-motion"

const education = [
  {
    degree: "Advanced Diploma in Software Engineering (ADSE) & Graphic Design",
    institution: "Aptech Computer Education, Ibadan, Oyo State",
    period: "Apr 2023 – Jul 2025",
  },
]

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

export default function Education() {
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
        Fig. 06 — Education
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center font-display"
      >
        Education
      </motion.h2>
      <motion.div
        variants={containerVariants}
        className="max-w-3xl mx-auto space-y-6"
      >
        {education.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-card p-6 rounded-lg border border-border/50 relative overflow-hidden group hover:border-circuit/30 transition-colors duration-500"
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-circuit/40 to-transparent" />
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-full bg-circuit/5 group-hover:bg-circuit/10 transition-colors duration-300">
                <GraduationCap className="h-5 w-5 text-circuit" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground font-display">{item.degree}</h3>
                <p className="text-sm text-muted-foreground">{item.institution}</p>
                {item.period && (
                  <p className="font-mono text-xs text-slate mt-1 tracking-wide">{item.period}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
