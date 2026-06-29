"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Github, Twitter, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data?.error || "Failed to send message.")
        setStatus("error")
        return
      }

      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      console.error("Failed to send message:", err)
      setError("Failed to send message. Please try again later.")
      setStatus("error")
    }
  }

  return (
    <div className="bg-card p-8 rounded-lg border border-border/50 w-full cyber-border">
      <p className="font-mono text-[10px] text-slate uppercase tracking-widest mb-2">&sect; Contact</p>
      <h2 className="text-2xl font-bold text-foreground mb-6 font-display">
        Let&apos;s work together &mdash; Reach out!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Label htmlFor="name" className="font-mono text-xs text-muted-foreground mb-1.5 block">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-circuit focus:ring-circuit/20 text-sm"
          />
        </div>
        <div>
          <Label htmlFor="email" className="font-mono text-xs text-muted-foreground mb-1.5 block">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-circuit focus:ring-circuit/20 text-sm"
          />
        </div>
        <div>
          <Label htmlFor="message" className="font-mono text-xs text-muted-foreground mb-1.5 block">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="bg-input border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:border-circuit focus:ring-circuit/20 text-sm"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-redline hover:bg-redline/90 text-white font-bold py-2.5 rounded-md text-sm transition-all duration-300 glow-redline-lg"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>
        {status === "success" && <p className="text-signal text-center text-sm mt-3 font-mono">Message sent successfully!</p>}
        {status === "error" && (
          <p className="text-red-400 text-center text-sm mt-3 font-mono">{error || "Failed to send message. Please try again later."}</p>
        )}
      </form>

      <div className="mt-8 pt-6 border-t border-border/30 text-center">
        <p className="font-mono text-[10px] text-slate uppercase tracking-widest mb-3">Contact Information</p>
        <p className="text-muted-foreground text-sm mb-2 flex items-center justify-center gap-2">
          <Mail className="h-4 w-4 text-circuit" /> etbismark@gmail.com
        </p>
        <p className="text-muted-foreground text-sm mb-5 flex items-center justify-center gap-2">
          <Phone className="h-4 w-4 text-circuit" /> +234 913 627 7208
        </p>

        <p className="font-mono text-[10px] text-slate uppercase tracking-widest mb-3">Connect</p>
        <div className="flex justify-center space-x-5">
          <Link
            href="https://github.com/Enochwork18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github className="h-5 w-5 text-muted-foreground hover:text-circuit transition-colors duration-300" />
          </Link>
          <Link
            href="https://linkedin.com/in/bismark-enoch-347a40332"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-circuit transition-colors duration-300" />
          </Link>
          <Link
            href="https://x.com/bismarkenoch?"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
          >
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-circuit transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}
