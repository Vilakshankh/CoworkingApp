import Image from 'next/image'

const images = [
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
  '/placeholder.svg?height=300&width=300',
]

export function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 grid grid-cols-3 gap-4 p-4 overflow-hidden pointer-events-none">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-full border border-white">
          <Image
            src={src}
            alt=""
            fill
            className="object-cover opacity-20"
          />
        </div>
      ))}
    </div>
  )
}

