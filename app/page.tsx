import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Services from "@/components/Services"
import Work from "@/components/Work"
import GraphicDesign from "@/components/GraphicDesign"
import Education from "@/components/Education"
import Certifications from "@/components/Certifications"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center py-16 relative overflow-hidden bg-background"
      >
        <Hero />
      </section>
      <section id="my-skills" className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid-light pointer-events-none" />
        <Skills />
      </section>
      <About />
      <section id="experience" className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid-light pointer-events-none" />
        <Experience />
      </section>
      <section id="services" className="py-20 relative overflow-hidden bg-background">
        <Services />
      </section>
      <section id="my-work" className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid-light pointer-events-none" />
        <Work />
      </section>
      <section id="graphic-design" className="py-20 relative overflow-hidden bg-background">
        <GraphicDesign />
      </section>
      <section id="education" className="py-20 relative overflow-hidden bg-background">
        <div className="absolute inset-0 dot-grid-light pointer-events-none" />
        <Education />
      </section>
      <section id="certifications" className="py-20 relative overflow-hidden bg-background">
        <Certifications />
      </section>
      <Footer />
    </>
  )
}
