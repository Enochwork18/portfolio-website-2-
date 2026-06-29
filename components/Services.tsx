"use client"

import type React from "react"
import { Brush, Monitor, Code, BarChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, easeOut } from "framer-motion"

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, link }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  }

  return (
    <motion.div
      className="bg-card p-6 rounded-lg border border-border/50 flex flex-col items-center text-center group hover:border-circuit/30 transition-colors duration-300"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-4 text-redline">{icon}</div>
      <h3 className="text-lg font-bold text-foreground mb-3 font-display">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <Link href={link} className="font-mono text-[11px] text-circuit hover:text-circuit/80 uppercase tracking-wider transition-colors">
        Learn More &rarr;
      </Link>
    </motion.div>
  )
}

export default function Services() {
  const services = [
    {
      icon: <Brush className="h-7 w-7" />,
      title: "Logo Design",
      description: "Crafting unique, timeless brand marks that capture your brand's essence.",
      link: "/services/logo-design",
    },
    {
      icon: <Monitor className="h-7 w-7" />,
      title: "UI Design",
      description: "Designing beautiful & intuitive interfaces that delight and engage users.",
      link: "/services/ui-design",
    },
    {
      icon: <Code className="h-7 w-7" />,
      title: "Web Development",
      description: "Building responsive, modern frontend sites with cutting-edge technologies.",
      link: "/services/web-development",
    },
    {
      icon: <BarChart className="h-7 w-7" />,
      title: "Infographics",
      description: "Creating sharp, clear visuals for promotion, data visualization, and digital media.",
      link: "/services/infographics",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <p className="section-eyebrow text-center">Fig. 05 — Services</p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-display">My Services</h2>
      <p className="text-sm text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        My comprehensive range of services designed to bring your vision to life. Click on each service to learn more.
      </p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </motion.div>
      <div className="text-center mt-12">
        <Link href="/contact">
          <Button className="bg-redline hover:bg-redline/90 text-white font-bold py-3 px-8 rounded-md text-base transition-all duration-300 shadow-lg shadow-redline/10">
            Start a Project With Me
          </Button>
        </Link>
      </div>
    </div>
  )
}
