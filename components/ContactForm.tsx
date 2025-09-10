"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Facebook, Github, Twitter, Mail, Phone } from "lucide-react"
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
    <div className="bg-card p-8 rounded-lg shadow-md border border-border w-full">
      <h2 className="text-3xl font-bold text-foreground mb-6 text-center lg:text-left">
        Let’s work together Reach out!
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-lg text-foreground mb-2 block">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <Label htmlFor="email" className="text-lg text-foreground mb-2 block">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
          />
        </div>
        <div>
          <Label htmlFor="message" className="text-lg text-foreground mb-2 block">
            Message
          </Label>
          <Textarea
            id="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary"
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-secondary text-primary-foreground font-bold py-3 rounded-md text-lg transition-all duration-300"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>
        {status === "success" && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
        {status === "error" && (
          <p className="text-red-500 text-center mt-4">{error || "Failed to send message. Please try again later."}</p>
        )}
      </form>

      <div className="mt-8 pt-6 border-t border-border text-center">
        <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information:</h3>
        <p className="text-muted-foreground mb-2 flex items-center justify-center gap-2">
          <Mail className="h-5 w-5 text-primary" /> etbismark@gmail.com
        </p>
        <p className="text-muted-foreground mb-4 flex items-center justify-center gap-2">
          <Phone className="h-5 w-5 text-primary" /> +(234) 9155689266
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-4">Connect with me:</h3>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://www.facebook.com/profile.php?id=100051129352598"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
          >
            <Facebook className="h-8 w-8 text-primary hover:text-secondary transition-colors duration-300" />
          </Link>
          <Link
            href="https://github.com/Enochwork18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <Github className="h-8 w-8 text-primary hover:text-secondary transition-colors duration-300" />
          </Link>
          <Link
            href="https://x.com/bismarkenoch?"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
          >
            <Twitter className="h-8 w-8 text-primary hover:text-secondary transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </div>
  )
}
