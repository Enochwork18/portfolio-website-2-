"use client"

import Script from "next/script"

export default function EmailJsLoader() {
  return (
    <Script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
      onLoad={() => {
        ;(window as any).emailjs.init({
          publicKey: "ztgVqiUBC-DGbdTdN", // Your EmailJS Public Key
        })
      }}
    />
  )
}
