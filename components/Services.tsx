"use client"

import type React from "react"
import { Brush, Monitor, Code, BarChart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, easeOut } from "framer-motion" // Import motion

interface ServiceItemProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description, link }) => {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  }

  return (
    <motion.div // Wrap with motion.div
      className="bg-card p-6 rounded-lg shadow-md border border-border flex flex-col items-center text-center"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-2xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mt-3 mb-4">{description}</p>
      <Link href={link} className="text-primary hover:underline font-medium">
        Learn More →
      </Link>
    </motion.div>
  )
}

export default function Services() {
  const services = [
    {
      icon: <Brush className="h-8 w-8 text-primary" />,
      title: "Logo Design",
      description: "Crafting unique, timeless brand marks that capture your brand's essence.",
      link: "/services/logo-design", // Updated link
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "UI Design",
      description: "Designing beautiful & intuitive interfaces that delight and engage users.",
      link: "/services/ui-design", // Updated link
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Building responsive, modern frontend sites with cutting-edge technologies.",
      link: "/services/web-development", // Updated link
    },
    {
      icon: <BarChart className="h-8 w-8 text-primary" />,
      title: "Infographics",
      description: "Creating sharp, clear visuals for promotion, data visualization, and digital media.",
      link: "/services/infographics", // Updated link
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">My Services</h2>
      <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
        My comprehensive range of services designed to bring your vision to life. Click on each service to learn more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/contact">
          <Button className="bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 px-8 rounded-md text-lg transition-all duration-300">
            Start a Project With Me
          </Button>
        </Link>
      </div>
    </div>
  )
}
