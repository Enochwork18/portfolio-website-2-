"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, easeOut } from "framer-motion" // Import motion

export default function Work() {
  const projects = [
    {
      title: "Plant E-Commerce",
      category: "UI/UX Design",
      description: "Responsive e-commerce website for plant store, focusing on user experience and modern aesthetics.",
      image: "/project-techware.png", // New image
      link: "https://github.com/Enochwork18",
    },
    {
      title: "Crypto Branding",
      category: "Graphic Design",
      description:
        "Comprehensive branding for Sujiko Crypto, including logo, visual identity, and marketing materials.",
      image: "/project-conference.png", // New image
      link: "https://github.com/Enochwork18",
    },
    {
      title: "Church Service Flyer",
      category: "Graphic Design",
      description: "Designed a compelling flyer for a church service, ensuring clear communication and visual appeal.",
      image: "/project-meeting.png", // New image
      link: "https://github.com/Enochwork18",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
  }

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">My Work</h2>
      <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
        Explore a selection of my recent projects across graphic design, UI/UX, and frontend development.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div // Wrap with motion.div
            key={index}
            className="bg-card rounded-lg shadow-md border border-border overflow-hidden"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src={project.image || "/placeholder.png"}
              alt={project.title}
              width={400} // Adjusted for better display
              height={250} // Adjusted for better display
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <span className="text-sm text-primary font-semibold mb-2 block">{project.category}</span>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-secondary text-primary-foreground font-bold py-2 px-6 rounded-md text-md transition-all duration-300">
                  View Project
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12">
        <Link href="https://github.com/Enochwork18" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold py-3 px-8 rounded-md text-lg transition-all duration-300 flex items-center gap-2 mx-auto bg-transparent"
          >
            View All Projects on GitHub
          </Button>
        </Link>
      </div>
    </div>
  )
}
