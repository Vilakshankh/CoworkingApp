import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function CreateProfile() {
  return (
    <div className="min-h-screen bg-[#006D5B] flex flex-col px-4 py-8">
      <div className="w-full max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-white hover:opacity-80 mb-8 px-4 py-1 border border-white/20 rounded-none"
        >
          Back
        </Link>

        <div className="flex items-center justify-between mb-12 text-white/60 text-sm">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-white text-[#006D5B] flex items-center justify-center font-medium">
              1
            </div>
            <span className="ml-3 text-white text-xs">Identity</span>
          </div>
          <div className="flex-1 h-px bg-white/20 mx-4" />
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              2
            </div>
            <span className="ml-3 text-xs">Personality</span>
          </div>
          <div className="flex-1 h-px bg-white/20 mx-4" />
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
              3
            </div>
            <span className="ml-3 text-xs">Availability</span>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="space-y-2 text-white text-left">
            <h1 className="text-2xl font-medium">tell us about yourself.</h1>
            <p className="text-white/60">
              we&apos;ll use this information to match you with your work buddy.
            </p>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="name"
                className="bg-transparent border-white/20 text-white placeholder:text-white/40"
              />
              <Input
                type="tel"
                placeholder="phone number"
                className="bg-transparent border-white/20 text-white placeholder:text-white/40"
              />
              <Input
                type="email"
                placeholder="email address"
                className="bg-transparent border-white/20 text-white placeholder:text-white/40"
              />
              
            </div>

            <Button
              asChild
              className="w-full bg-white text-[#006D5B] hover:bg-white/90"
            >
              <Link href="/create-profile/personality">
                personality questions
              </Link>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

