import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Logo Design Services - Enoch Bismark",
  description: "Detailed information about professional logo design services offered by Enoch Bismark.",
}

export default function LogoDesignPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <Link href="/#services" className="flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Services
        </Link>
        <h1 className="text-5xl font-bold mb-6">Logo Design</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Your logo is the cornerstone of your brand identity. It's the first impression, a visual representation of
          your values, and a symbol that resonates with your audience. My logo design services focus on crafting unique,
          timeless brand marks that capture your brand's essence and stand out in a crowded market.
        </p>

        <h2 className="text-3xl font-semibold mb-4">What I Offer:</h2>
        <ul className="list-disc list-inside text-lg text-muted-foreground mb-8 space-y-2">
          <li>
            Custom Concepts: Developing multiple unique logo concepts tailored to your brand's vision and industry.
          </li>
          <li>
            Brand Research: In-depth analysis of your target audience, competitors, and market trends to ensure your
            logo is strategic and effective.
          </li>
          <li>
            Versatile Formats: Providing your final logo in various formats (vector, raster) suitable for print, web,
            and merchandise.
          </li>
          <li>
            Brand Guidelines: Optional creation of basic brand guidelines to ensure consistent use of your new logo.
          </li>
          <li>
            Revisions: Collaborative revision process to refine the design until it perfectly aligns with your
            expectations.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">My Process:</h2>
        <ol className="list-decimal list-inside text-lg text-muted-foreground mb-8 space-y-2">
          <li>Discovery: Understanding your brand, goals, and preferences.</li>
          <li>Concept Development: Sketching and digitizing initial logo ideas.</li>
          <li>Presentation & Feedback: Presenting concepts and gathering your valuable input.</li>
          <li>Refinement: Iterating on chosen concepts based on feedback.</li>
          <li>Final Delivery: Providing all necessary files and support.</li>
        </ol>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 px-8 rounded-md text-lg transition-all duration-300">
              Get a Custom Logo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
