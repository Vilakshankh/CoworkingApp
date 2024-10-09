"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Submitted email:', email)
    setSubmitted(true)
    setEmail('')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-background to-secondary p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary animate-in slide-in-from-bottom duration-500">
          Join Our Waitlist
        </h1>
        <p className="text-xl text-muted-foreground animate-in slide-in-from-bottom duration-500 delay-150">
          Be the first to know when we launch our revolutionary product.
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 animate-in slide-in-from-bottom duration-500 delay-300">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button type="submit" className="w-full">
              Join Waitlist
            </Button>
          </form>
        ) : (
          <div className="mt-8 p-4 bg-primary/10 rounded-lg animate-in zoom-in duration-300">
            <p className="text-lg font-semibold text-primary">Thank you for joining our waitlist!</p>
            <p className="text-muted-foreground">We'll notify you when we launch.</p>
          </div>
        )}
      </div>
    </div>
  )
}