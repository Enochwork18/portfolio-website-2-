import ContactForm from "@/components/ContactForm"

export const metadata = {
  title: "Contact Enoch - Get in Touch",
  description: "Send a message to Enoch Bismark for design and development inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen flex flex-col items-center justify-center bg-muted">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">Get in Touch</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
        <div className="flex flex-col items-center lg:items-start">
          <ContactForm />
        </div>
        <div className="w-full h-96 bg-card rounded-lg overflow-hidden shadow-md border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8000000000007!2d3.875!3d7.383333333333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d1111111111%3A0x1111111111111111!2sIbadan%2C%20Oyo%20State%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </div>
    </div>
  )
}
