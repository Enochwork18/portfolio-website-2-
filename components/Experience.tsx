"use client"

import { motion, easeOut } from "framer-motion"

const experiences = [
  {
    title: "Frontend Developer & Designer",
    company: "Freelance Client Project — Ìbáṣepọ̀ Connected Hearts Coaching",
    location: "Remote — London, UK",
    period: "2025 – 2026",
    highlights: [
      "Designed and built a Next.js booking and consultation website for a UK-based, faith-integrated relationship-coaching practice, covering services, blog, testimonials, and newsletter sign-up.",
      "Delivered and deployed the site on Vercel; live and operational while final client sign-off is pending.",
    ],
  },
  {
    title: "Graphics Designer & Frontend Developer",
    company: "RoyalGad AG Industries Ltd",
    location: "Ibadan, Nigeria",
    period: "2026",
    highlights: [
      "Own the full brand and digital presence for a NAFDAC-registered hygiene and disinfectant manufacturer, including product infographics and social media content across a seven-product line.",
      "Build and maintain the company's Next.js/Supabase website on Vercel — shipping features, fixing bugs, and managing deployment configuration.",
      "Produce supporting business documents, including proposals, budgets, and HR data-collection forms.",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "SpringVox Solutions Limited",
    location: "Remote — Lagos, Nigeria (Startup)",
    period: "2025 – 2026",
    highlights: [
      "Develop frontend features for Rekall-IQ, an enterprise RAG knowledge-AI platform built with Next.js, TypeScript, Tailwind CSS, Supabase, Qdrant, and Google Gemini.",
      "Build and maintain the company's marketing website, working within set branding, logo, and SEO standards.",
    ],
  },
  {
    title: "CV & Job Application Consultant",
    company: "Freelance",
    location: "Remote",
    period: "2025",
    highlights: [
      "Helped job seekers restructure CVs, sharpen achievements, and prepare application materials for online job searches.",
    ],
  },
  {
    title: "Frontend Developer & Designer",
    company: "Freelance",
    location: "Ibadan, Nigeria",
    period: "2023 – 2025",
    highlights: [
      "Built responsive websites and small web applications with HTML, CSS, and JavaScript for client businesses.",
      "Integrated custom branding into client-facing products, improving usability, accessibility, and engagement.",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Freelance",
    location: "Ibadan, Nigeria",
    period: "2022 – 2025",
    highlights: [
      "Created logos, business identities, and marketing infographics for client brands.",
      "Designed social media graphics that boosted audience engagement, incorporating client feedback iteratively.",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
}

export default function Experience() {
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
        Fig. 04 — Experience
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-display"
      >
        Experience
      </motion.h2>
      <motion.p
        variants={itemVariants}
        className="text-base text-muted-foreground mb-12 text-center max-w-2xl mx-auto"
      >
        A track record of shipping real products for real clients — from branding to full-stack web applications.
      </motion.p>

      <div className="max-w-4xl mx-auto space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-card p-6 rounded-lg border border-border/50 relative overflow-hidden group hover:border-circuit/30 transition-colors duration-500"
          >
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-circuit/40 via-redline/20 to-transparent" />
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
              <div>
                <h3 className="text-lg font-bold text-foreground font-display">{exp.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{exp.company}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="font-mono text-xs text-slate tracking-wide">{exp.period}</span>
              </div>
            </div>
            <p className="text-xs font-mono text-slate mb-3 tracking-wide">{exp.location}</p>
            <ul className="space-y-1.5">
              {exp.highlights.map((h, i) => (
                <li key={i} className="text-sm text-muted-foreground pl-4 border-l-2 border-border/40 group-hover:border-circuit/30 transition-colors duration-300">
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
