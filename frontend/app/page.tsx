"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() //prevent the page from refreshing after form submit
    // Here you would typically send the email to your backend

    const formData = {email};

    try{
      const response = await fetch('http://localhost:5000/api/users', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok){
        setSubmitted(true)
        setEmail('')
      }else{
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error Submitting form:', error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-md w-full space-y-8 text-start">
        <h1 className="text-blue-700 text-9xl font-extrabold tracking-tight text-primary animate-in slide-in-from-bottom duration-500">
          The Butterfly Project.
        </h1>
        <p className="text-2xl text-black animate-in slide-in-from-bottom duration-500 delay-150">
        Match with coworking buddies and work together from cafes. </p>
        <p className="text-1xl text-black animate-in slide-in-from-bottom duration-500 delay-300">
        
        Join the waitlist and take the first step towards building your coworking profile. 
                
        </p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4 animate-in slide-in-from-bottom duration-500 delay-300">
            <Input
              type="email"
              placeholder="Enter your email"
              value= {email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border-blue-700 border-2"
            />
            <Button type="submit" className="w-full button-color bg-blue-700">
              Create My Aura
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