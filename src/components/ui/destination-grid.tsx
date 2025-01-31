import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const destinations = [
  {
    country: "Singapore",
    accommodations: "644",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    country: "Malaysia",
    accommodations: "8,371",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    country: "Thailand",
    accommodations: "27,449",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    country: "South Korea",
    accommodations: "15,929",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    country: "Japan",
    accommodations: "28,141",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    country: "Hong Kong",
    accommodations: "960",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function DestinationGrid() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">🏢 Rediscover yourself in Asia and beyond</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <Card key={destination.country} className="overflow-hidden group">
              <Link href="#" className="relative block">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.country}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <CardContent className="absolute bottom-0 left-0 right-0 text-white p-6">
                  <h3 className="text-2xl font-bold mb-1">{destination.country}</h3>
                  <p className="text-sm text-white/90">{destination.accommodations} accommodations</p>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DestinationGrid