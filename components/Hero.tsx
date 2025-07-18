"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, easeOut } from "framer-motion" // Import motion

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  }

  return (
    <motion.div
      className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="lg:w-1/2 text-center lg:text-left">
        <motion.h2 variants={itemVariants} className="text-xl text-primary font-semibold mb-4">
          Hi, I’m Bismark Enoch
        </motion.h2>
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-6xl font-extrabold text-foreground leading-tight mb-6"
        >
          A Creative Designer & Developer
        </motion.h1>
        <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
          Solving problems with creativity, color, and code.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8"
        >
          <Link href="#my-work">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 px-8 rounded-md text-lg transition-all duration-300">
              View My Work
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 bg-transparent"
            >
              Contact Me
            </Button>
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="lg:w-1/2 flex justify-center lg:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeOut, delay: 0.4 } }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <Image
          src="/hero-image.png"
          alt="3D illustration of a developer"
          width={500}
          height={500}
          className="rounded-lg shadow-xl"
          priority
        />
      </motion.div>
    </motion.div>
  )
}
