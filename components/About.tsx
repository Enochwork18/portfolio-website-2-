"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { motion, easeOut } from "framer-motion" // Import motion and easeOut

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }, // Changed "easeOut" to easeOut
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
        About Me
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card p-8 rounded-lg shadow-md border border-border max-w-6xl mx-auto"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
          <Image
            src="/about-image.png"
            alt="Developer's desk with code on screen"
            width={600}
            height={600}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
        <div>
          <motion.h3 variants={itemVariants} className="text-3xl font-semibold text-foreground mb-6">
            Creative & Problem Solver
          </motion.h3>
          <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-6">
            A focused and innovative graphic design student with a passion for branding, illustration, and web
            development. Proficient in creating visual identities, vector art, and typography. Solid knowledge of HTML,
            CSS, JavaScript, and .NET. Strong communicator, detail-driven, and continuously learning.
          </motion.p>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-semibold text-primary mb-3">Contact Info</h4>
              <ul className="text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+(234) 9155689266</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <Link href="mailto:etbismark@gmail.com" className="hover:text-primary">
                    etbismark@gmail.com
                  </Link>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h4 className="text-2xl font-semibold text-primary mb-3">Education</h4>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Advanced Diploma in Software Engineering (ADSE) & Graphic Design</strong>
                  <br />
                  Aptech Computer Education, Ibadan
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <h4 className="text-2xl font-semibold text-primary mb-3">Tools & Skills</h4>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>
                <strong>Graphic Design & Branding:</strong> Adobe Illustrator, Photoshop, Canva, Figma
              </li>
              <li>
                <strong>Web Development:</strong> HTML, CSS, JavaScript, .NET
              </li>
              <li>
                <strong>Multimedia & Infographics:</strong> Vector Graphics, Typography, UI/UX Fundamentals, JustAudio
                (for music design projects)
              </li>
            </ul>
          </motion.div>

          <motion.blockquote
            variants={itemVariants}
            className="text-xl italic text-muted-foreground border-l-4 border-primary pl-4 py-2"
          >
            "I believe great design speaks. I code to build what I imagine."
          </motion.blockquote>
        </div>
      </motion.div>
    </motion.div>
  )
}
