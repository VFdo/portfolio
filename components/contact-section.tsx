'use client'

import { useRef, useState } from 'react'
import { SendHorizontal } from 'lucide-react'
import { sendContactEmail } from "@/lib/emailjs";


export function ContactSection() {
  const [message, setMessage] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
    const el = textareaRef.current
    if (el) {
      el.style.height = 'auto'
      el.style.height = `${el.scrollHeight}px`
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    await sendContactEmail(message);
    alert("Message sent successfully!");
    setMessage("");
  } catch (error) {
    alert("Failed to send message. Please reach out to me via LinkedIn");
    console.error(error);
  }
};

  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-10 text-2xl font-medium tracking-tight">Contact Me</h2>
      <form
        className="flex w-full items-end gap-3 rounded-3xl border border-border bg-card px-5 py-3 transition-colors focus-within:border-foreground"
        onSubmit={(e) => {
          e.preventDefault()
          setMessage('')
          if (textareaRef.current) textareaRef.current.style.height = 'auto'
        }}
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleInput}
          placeholder="Write a message..."
          aria-label="Message"
          rows={1}
          className="max-h-60 w-full resize-none self-center bg-transparent py-2 text-base text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          aria-label="Send message"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
        >
          Send
          <SendHorizontal className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </section>
  )
}
