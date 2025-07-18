import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import About from "@/components/About"
import Services from "@/components/Services"
import Work from "@/components/Work"
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
      <section id="my-skills" className="py-20 relative overflow-hidden bg-muted">
        <Skills />
      </section>
      <section id="about-me" className="py-20 relative overflow-hidden bg-background">
        <About />
      </section>
      <section id="services" className="py-20 relative overflow-hidden bg-muted">
        <Services />
      </section>
      <section id="my-work" className="py-20 relative overflow-hidden bg-background">
        <Work />
      </section>
      <Footer />
    </>
  )
}
