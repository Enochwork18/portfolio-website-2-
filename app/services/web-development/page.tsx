import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Web Development Services - Enoch Bismark",
  description: "Detailed information about professional web development services offered by Enoch Bismark.",
}

export default function WebDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto">
        <Link href="/#services" className="flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="h-5 w-5 mr-2" /> Back to Services
        </Link>
        <h1 className="text-5xl font-bold mb-6">Web Development</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Bringing designs to life with clean, efficient, and modern code. I specialize in building responsive frontend
          websites that are not only visually appealing but also highly functional, performant, and optimized for user
          experience.
        </p>

        <h2 className="text-3xl font-semibold mb-4">What I Offer:</h2>
        <ul className="list-disc list-inside text-lg text-muted-foreground mb-8 space-y-2">
          <li>
            Responsive Websites: Developing sites that adapt seamlessly to any screen size, from mobile phones to large
            desktops.
          </li>
          <li>
            Modern Frontend: Utilizing the latest web technologies like React, Next.js, and Tailwind CSS to build fast
            and scalable applications.
          </li>
          <li>
            Performance Optimization: Ensuring quick loading times and smooth interactions for an optimal user
            experience.
          </li>
          <li>
            SEO Best Practices: Implementing search engine optimization techniques to improve your site's visibility.
          </li>
          <li>Integration: Connecting your website with various APIs and third-party services as needed.</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">My Process:</h2>
        <ol className="list-decimal list-inside text-lg text-muted-foreground mb-8 space-y-2">
          <li>Planning: Defining project scope, technologies, and timelines.</li>
          <li>Development: Writing clean, modular, and well-documented code.</li>
          <li>Testing: Rigorous testing across devices and browsers.</li>
          <li>Deployment: Launching your website with reliable hosting solutions.</li>
          <li>Maintenance: Providing ongoing support and updates.</li>
        </ol>

        <div className="text-center mt-12">
          <Link href="/contact">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 px-8 rounded-md text-lg transition-all duration-300">
              Build Your Website
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
