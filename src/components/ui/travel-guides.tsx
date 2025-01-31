"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const guides = [
  {
    city: "Bali",
    country: "Indonesia",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    city: "Seoul",
    country: "South Korea",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    city: "Liverpool",
    country: "United Kingdom",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function TravelGuides() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">🔭 International escapes: get the guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {guides.map((guide) => (
            <Card key={guide.city} className="overflow-hidden group">
              <Link href="#" className="relative block">
                <Image
                  src={guide.image || "/placeholder.svg"}
                  alt={`${guide.city}, ${guide.country}`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 text-white p-4">
                  <h3 className="font-bold">{guide.city}</h3>
                  <p className="text-sm text-white/90">{guide.country}</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TravelGuides