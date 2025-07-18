import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "UI Design Services - Enoch Bismark",
  description: "Detailed information about professional UI design services offered by Enoch Bismark.",
}

export default function UIDesignPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <Link href="/#services" className="flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Services
        </Link>
        <h1 className="text-5xl font-bold mb-6">UI Design</h1>
        <p className="text-lg text-muted-foreground mb-8">
          User Interface (UI) design is about creating visually appealing and intuitive interfaces that delight and
          engage users. I focus on crafting seamless and enjoyable digital experiences, ensuring your product looks
          stunning and functions flawlessly.
        </p>

        <h2 className="text-3xl font-semibold mb-4">What I Offer:</h2>
        <ul className="list-disc list-inside text-lg text-muted-foreground mb-8 space-y-2">
          <li>
            **Intuitive Layouts:** Designing clear and logical layouts that guide users effortlessly through your
            application or website.
          </li>
          <li>
            **Visual Hierarchy:** Establishing a strong visual hierarchy to highlight important information and actions.
          </li>
          <li>**Component Libraries:** Creating reusable UI components for consistency and efficient development.</li>
          <li>
            **Interactive Prototypes:** Developing interactive prototypes to test user flows and gather feedback early
            in the design process.
          </li>
          <li>
            **Responsive Design:** Ensuring your UI looks and performs beautifully on all devices, from mobile to
            desktop.
          </li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">My Process:</h2>
        <ol className="list-decimal list-inside text-lg text-muted-foreground mb-8 space-y-2">
          <li>**Research & Analysis:** Understanding user needs and business goals.</li>
          <li>**Wireframing & Prototyping:** Creating low-fidelity and high-fidelity mockups.</li>
          <li>**Visual Design:** Applying branding, color palettes, and typography.</li>
          <li>**User Testing:** Validating designs with real users.</li>
          <li>**Handoff:** Preparing design assets for development.</li>
        </ol>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 px-8 rounded-md text-lg transition-all duration-300">
              Start a UI Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
