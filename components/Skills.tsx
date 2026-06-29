"use client"

import { Code, Terminal, Palette, Layout, Users } from "lucide-react"
import { motion, easeOut } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="h-5 w-5 text-circuit" />,
      category: "Frontend Development",
      items: [
        "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript",
        "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Sass/SCSS",
      ],
    },
    {
      icon: <Terminal className="h-5 w-5 text-circuit" />,
      category: "Backend & Tools",
      items: [
        "Node.js", "Python", "Django", "Java", "C#", ".NET",
        "SQL", "MongoDB", "MySQL", "REST APIs", "Supabase", "Git/GitHub",
      ],
    },
    {
      icon: <Palette className="h-5 w-5 text-redline" />,
      category: "Design & Branding",
      items: [
        "Adobe Illustrator", "Photoshop", "Figma", "Canva",
        "Logo & Brand Identity", "Typography", "Vector Illustration", "Infographics",
      ],
    },
    {
      icon: <Layout className="h-5 w-5 text-circuit" />,
      category: "UI/UX & Multimedia",
      items: [
        "UI/UX Fundamentals", "Wireframing & Prototyping", "Responsive Design", "Visual Storytelling",
      ],
    },
    {
      icon: <Users className="h-5 w-5 text-slate" />,
      category: "Soft Skills",
      items: [
        "Attention to detail", "Client communication", "Problem-solving", "Persistence", "Cross-functional collaboration",
      ],
    },
  ]

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: easeOut } },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.p
        variants={itemVariants}
        className="section-eyebrow text-center"
      >
        Fig. 02 — Skills
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center font-display"
      >
        Technical Capabilities
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((skillCategory, index) => (
          <motion.div
            key={index}
            className="bg-card p-5 rounded-lg border border-border/50 flex flex-col relative overflow-hidden group hover:border-circuit/40 transition-colors duration-500"
            variants={itemVariants}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="absolute inset-0 shimmer-bg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-border/30">
                <div className="p-1.5 rounded-md bg-circuit/5 group-hover:bg-circuit/10 transition-colors duration-300">
                  {skillCategory.icon}
                </div>
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider font-mono">
                  {skillCategory.category}
                </h4>
              </div>
              <ul className="space-y-1.5">
                {skillCategory.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-muted-foreground font-body transition-colors duration-300 group-hover:text-foreground/80"
                    style={{ transitionDelay: `${idx * 30}ms` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-circuit/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
