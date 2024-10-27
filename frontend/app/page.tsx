"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect } from 'react';

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'media/butterfly-background1.jpg',
    'media/butterfly-background2.jpg',
    'media/butterfly-background5.jpg',
    'media/butterfly-background7.jpg',
    'media/butterfly-background9.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the image index every 30 seconds
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 30000); // 30 seconds interval

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [images.length]);

  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() //prevent the page from refreshing after form submit
    // Here you would typically send the email to your backend

    const formData = {email};

    try{
      const response = await fetch('https://v6wrjkpqnb.execute-api.us-east-2.amazonaws.com/dev/users', 
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
    <div
      className="flex items-start justify-start h-screen w-screen"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
    <div className="pl-24 pt-24 flex flex-col items-start justify-start">

      <div className="max-w-md w-full space-y-8 text-start">
        <h1 
          className="text-9xl  tracking-tight text-primary animate-in slide-in-from-bottom duration-500"
          style={{ fontFamily: "'LondrinaSolid-Black', sans-serif", color: 'white' } }
          >
            The Butterfly Project.
          </h1>

        <p className="text-2xl animate-in slide-in-from-bottom duration-500 delay-150">
        Match with coworking buddies and work together from cafes. </p>
        <p className="text-1xl  animate-in slide-in-from-bottom duration-500 delay-300">
        
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
              className="w-full border-blue-700 border-2 bg-white"
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
    </div>
  )
}