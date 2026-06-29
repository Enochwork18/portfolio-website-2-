import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#14161B] text-[#F5F1E8] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold mb-3 font-display text-[#F5F1E8]">Bismark Enoch</h3>
            <p className="text-sm text-[#8B92A0] font-body leading-relaxed">
              Frontend Developer &amp; Creative Engineer | UI/UX-Informed Graphic Designer. Bridging design and code to build
              impactful web experiences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 font-mono uppercase tracking-widest text-[#8B92A0]">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about-me" className="text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300 font-body">
                  About
                </Link>
              </li>
              <li>
                <Link href="#my-skills" className="text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300 font-body">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300 font-body">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#my-work" className="text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300 font-body">
                  Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300 font-body">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300 font-body">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-4 font-mono uppercase tracking-widest text-[#8B92A0]">Connect</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <Link href="https://github.com/Enochwork18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300" />
              </Link>
              <Link href="https://x.com/bismarkenoch?" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300" />
              </Link>
              <Link
                href="https://linkedin.com/in/bismark-enoch-347a40332"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300" />
              </Link>
              <Link href="mailto:etbismark@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5 text-[#F5F1E8]/70 hover:text-[#2F7BFF] transition-colors duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-[#F5F1E8]/10 text-center">
          <p className="font-mono text-xs text-[#8B92A0] tracking-wide">
            &copy; {currentYear} Bismark Enoch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
