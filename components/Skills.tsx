"use client"

import { Palette, Code, Layout, Lightbulb } from "lucide-react"
import { motion } from "framer-motion"

export default function Skills() {
  const hardSkills = [
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      category: "Design Tools",
      items: ["Adobe Illustrator", "Photoshop", "Canva", "Figma"],
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", ".NET"],
    },
    {
      icon: <Layout className="h-8 w-8 text-primary" />,
      category: "UI/UX",
      items: ["Wireframes", "User Flows", "Visual Design"],
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      category: "Multimedia",
      items: ["Typography", "Infographics", "Vector Art"],
    },
  ]

  const softSkills = ["Creativity", "Communication", "Patience", "Curiosity"]

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
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
        My Skills
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Hard Skills Section */}
        {hardSkills.map((skillCategory, index) => (
          <motion.div
            key={index}
            className="bg-card p-6 rounded-lg shadow-md border border-border flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <div className="mb-4">{skillCategory.icon}</div>
            <h4 className="text-xl font-semibold text-foreground mb-3">{skillCategory.category}</h4>
            <ul className="list-none text-muted-foreground space-y-1">
              {skillCategory.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Soft Skills Section - Separate section as per design */}
      <div className="mt-12">
        <motion.h3 variants={itemVariants} className="text-3xl font-semibold text-foreground mb-6 text-center">
          Soft Skills
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-card p-6 rounded-lg shadow-md border border-border flex items-center justify-center text-center"
              variants={itemVariants}
            >
              <p className="text-xl font-medium text-foreground">{skill}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
