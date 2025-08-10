import Link from "next/link"
import { Facebook, Github, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card text-foreground py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: Bismark Enoch */}
        <div>
          <h3 className="text-xl font-bold mb-4">Bismark Enoch</h3>
          <p className="text-sm text-muted-foreground">
            A creative designer and developer passionate about blending art, code, and user-centered innovation.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#about-me" className="hover:text-primary transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link href="#my-work" className="hover:text-primary transition-colors duration-300">
                Work
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-primary transition-colors duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Connect */}
        <div>
          <h3 className="text-xl font-bold mb-4">Connect</h3>
          <div className="flex justify-center md:justify-start gap-5">
            <Link href="https://github.com/Enochwork18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-7 w-7 text-foreground hover:text-primary transition-colors duration-300" />
            </Link>
            <Link href="https://x.com/bismarkenoch?" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-7 w-7 text-foreground hover:text-primary transition-colors duration-300" />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100051129352598"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-7 w-7 text-foreground hover:text-primary transition-colors duration-300" />
            </Link>
            <Link href="mailto:etbismark@gmail.com" aria-label="Email">
              <Mail className="h-7 w-7 text-foreground hover:text-primary transition-colors duration-300" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-4 border-t border-border text-center text-sm text-muted-foreground">
        <p>&copy; 2025 Bismark Enoch. All rights reserved.</p>
      </div>
    </footer>
  )
}
