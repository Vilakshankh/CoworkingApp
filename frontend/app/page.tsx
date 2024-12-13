import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-[url('/media/background.png')] bg-cover bg-center text-white px-4 overflow-hidden">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          we match you with people to cowork together from a cafe
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white/20 w-full sm:w-auto rounded-none"
          >
            <Link href="createProfile/identityQuestions">
              create my profile
            </Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="bg-white/10 text-white border-white hover:bg-white/20 w-full sm:w-auto rounded-none"
          >
            <Link href="/get-matched">
              check out events
            </Link>
          </Button>
        </div>
      </div>

      <footer className="absolute bottom-8 space-y-2 text-sm">
        <div>
          <Link 
            href="/about"
            className="hover:underline"
          >
            learn more about us
          </Link>
        </div>
        <div>
          <Link 
            href="/contact"
            className="hover:underline"
          >
            contact us
          </Link>
        </div>
      </footer>
    </main>
  )
}

