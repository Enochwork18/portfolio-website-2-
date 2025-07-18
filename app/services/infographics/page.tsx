import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Infographics Services - Enoch Bismark",
  description: "Detailed information about professional infographic design services offered by Enoch Bismark.",
}

export default function InfographicsPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <Link href="/#services" className="flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Services
        </Link>
        <h1 className="text-5xl font-bold mb-6">Infographics</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Transform complex data and information into clear, compelling, and visually engaging infographics. My designs
          make information digestible and memorable, perfect for presentations, reports, social media, and digital
          marketing.
        </p>

        <h2 className="text-3xl font-semibold mb-4">What I Offer:</h2>
        <ul className="list-disc list-inside text-lg text-muted-foreground mb-8 space-y-2">
          <li>Data Visualization: Converting raw data into easy-to-understand charts, graphs, and visual elements.</li>
          <li>Storytelling: Crafting a narrative through visuals to make your information more impactful.</li>
          <li>Custom Illustrations: Creating unique illustrations and icons to enhance visual appeal.</li>
          <li>
            Layout & Typography: Designing layouts that guide the eye and using typography effectively for readability.
          </li>
          <li>Versatile Use: Infographics suitable for print, web, and social media platforms.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">My Process:</h2>
        <ol className="list-decimal list-inside text-lg text-muted-foreground mb-8 space-y-2">
          <li>Content Gathering: Receiving your data and key messages.</li>
          <li>Concept & Outline: Developing a visual concept and structuring the information.</li>
          <li>Design & Iteration: Creating the infographic and refining based on feedback.</li>
          <li>Finalization: Delivering high-resolution files in desired formats.</li>
        </ol>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 px-8 rounded-md text-lg transition-all duration-300">
              Get an Infographic
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
