"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { motion, easeOut } from "framer-motion"

export default function Work() {
  const webProjects = [
    {
      title: "Ibáṣepọ̀ Connected Hearts Coaching",
      category: "Next.js Web App",
      description:
        "Booking and consultation website for a UK-based relationship-coaching practice, covering services, blog, testimonials, and newsletter sign-up.",
      link: "https://ibasepo.vercel.app/",
      stack: "Next.js · Tailwind CSS · Vercel",
    },
    {
      title: "RoyalGad AG Industries Ltd",
      category: "Next.js / Supabase",
      description:
        "Full brand identity, product infographics, and company website for a NAFDAC-registered hygiene manufacturer.",
      link: "https://royalgad-industries-ltd.vercel.app/",
      stack: "Next.js · Supabase · Tailwind CSS",
    },
    {
      title: "Rekall-IQ (SpringVox Knowledge AI)",
      category: "Enterprise RAG Platform",
      description:
        "Enterprise RAG knowledge-AI platform frontend built with Next.js, TypeScript, and Tailwind CSS.",
      link: "https://springvox-knowledge-ai.vercel.app/",
      stack: "Next.js · TypeScript · Qdrant · Gemini",
    },
    {
      title: "SpringVox Solutions Limited",
      category: "Marketing Website",
      description: "Company marketing website for a Lagos-based startup.",
      link: "https://springvox.vercel.app/",
      stack: "Next.js · Tailwind CSS",
    },
    {
      title: "SpringVox Solutions Limited",
      category: "Business Website",
      description: "Business website for SpringVox Solutions Limited.",
      link: "https://spring-vox-solution-limited.vercel.app/",
      stack: "Next.js · Tailwind CSS",
    },
    {
      title: "The Complete Baking & Desserts Book",
      category: "Recipe Web App",
      description: "Recipe management web app with PDF export and bulk-import features.",
      link: "https://the-complete-baking-desserts-book.vercel.app/",
      stack: "Next.js · PDF Export",
    },
    {
      title: "Love Letter",
      category: "Web App",
      description: "A love letter web application.",
      link: "https://love-leter-dusky.vercel.app/",
      stack: "React · CSS",
    },
    {
      title: "TT Game",
      category: "Web Game",
      description: "An interactive web game built with modern frontend technologies.",
      link: "https://ttgame-lemon.vercel.app/",
      stack: "JavaScript · HTML · CSS",
    },
  ]

  const designProjects = [
    {
      title: "Crypto Branding",
      category: "Graphic Design",
      description:
        "Comprehensive branding for Sujiko Crypto, including logo, visual identity, and marketing materials.",
      link: "https://github.com/Enochwork18",
    },
    {
      title: "Church Service Flyer",
      category: "Graphic Design",
      description: "Designed a compelling flyer for a church service, ensuring clear communication and visual appeal.",
      link: "https://github.com/Enochwork18",
    },
    {
      title: "Plant E-Commerce",
      category: "UI/UX Design",
      description: "Responsive e-commerce website for plant store, focusing on user experience and modern aesthetics.",
      link: "https://github.com/Enochwork18",
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <p className="section-eyebrow text-center">&sect; 03 / Work</p>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center font-display">My Work</h2>
      <p className="text-base text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
        Live web applications and platforms I have built and shipped.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {webProjects.map((project, index) => (
          <motion.div
            key={index}
            className="group relative bg-card rounded-lg border border-border/50 overflow-hidden flex flex-col"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="p-6 flex flex-col flex-1 relative z-10 transition-transform duration-300 group-hover:scale-[0.97]">
              <span className="font-mono text-[10px] text-slate uppercase tracking-widest mb-2">{project.category}</span>
              <h3 className="text-lg font-bold text-foreground mb-2 font-display">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Button className="bg-redline hover:bg-redline/90 text-white font-bold py-2 px-5 rounded-md text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-redline/10 group-hover:shadow-redline/30">
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Site
                </Button>
              </Link>
            </div>

            {/* Blueprint overlay on hover */}
            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-circuit/5" />
              {/* Drafting lines */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-redline/40 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-redline/40 to-transparent" />
              <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-redline/40 to-transparent" />
              <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-redline/40 to-transparent" />

              {/* Dimension marks */}
              <div className="absolute top-1 left-1 font-mono text-[8px] text-redline/60">&#x2191; 240px</div>
              <div className="absolute bottom-1 right-1 font-mono text-[8px] text-redline/60">&#x2190; 320px</div>

              {/* Corner marks */}
              <div className="absolute top-2 left-2 w-3 h-px bg-redline/40" />
              <div className="absolute top-2 left-2 w-px h-3 bg-redline/40" />
              <div className="absolute top-2 right-2 w-3 h-px bg-redline/40" />
              <div className="absolute top-2 right-2 w-px h-3 bg-redline/40" />
              <div className="absolute bottom-2 left-2 w-3 h-px bg-redline/40" />
              <div className="absolute bottom-2 left-2 w-px h-3 bg-redline/40" />
              <div className="absolute bottom-2 right-2 w-3 h-px bg-redline/40" />
              <div className="absolute bottom-2 right-2 w-px h-3 bg-redline/40" />

              {/* Stack tag */}
              {project.stack && (
                <div className="absolute bottom-4 left-4 font-mono text-[9px] text-circuit/70 bg-background/80 px-2 py-1 rounded border border-circuit/20 backdrop-blur-sm translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  STACK: {project.stack}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-foreground mb-4 text-center font-display">Graphic Design Projects</h3>
        <p className="text-sm text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          A selection of branding, identity, and visual design work.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-lg border border-border/50 overflow-hidden flex flex-col"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="p-6 flex flex-col flex-1">
                <span className="font-mono text-[10px] text-slate uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-lg font-bold text-foreground mb-2 font-display">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">{project.description}</p>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-circuit hover:bg-circuit/90 text-white font-bold py-2 px-5 rounded-md text-sm transition-all duration-300">
                    View Project
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <Link href="https://github.com/Enochwork18" target="_blank" rel="noopener noreferrer">
          <Button
            variant="outline"
            className="border-slate text-slate hover:bg-slate/10 font-bold py-3 px-8 rounded-md text-base transition-all duration-300 mx-auto bg-transparent"
          >
            View All Projects on GitHub
          </Button>
        </Link>
      </div>
    </div>
  )
}
