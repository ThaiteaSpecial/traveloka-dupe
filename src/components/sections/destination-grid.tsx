import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const destinations = [
  {
    country: "Singapore",
    accommodations: "644",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721566647-a9de259613519385ba3d35b8c0f7fa36.png?tr=dpr-2,q-75,w-427",
  },
  {
    country: "Malaysia",
    accommodations: "8,371",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/05/29/1685328965749-d622f5f8496a6dc11d9b1aca65c6d58e.png?tr=dpr-2,q-75,w-427",
  },
  {
    country: "Thailand",
    accommodations: "27,449",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/05/29/1685329328194-3d7df8cb31d4a3bf69f10209ba8402ec.png?tr=dpr-2,q-75,w-427",
  },
  {
    country: "South Korea",
    accommodations: "15,929",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721591735-cab6fa6f208b22ceeca4e151e960812a.png?tr=dpr-2,q-75,w-427",
  },
  {
    country: "Japan",
    accommodations: "28,141",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686722034760-3264e7f9d2691b3557ac3fd74677ee55.png?tr=dpr-2,q-75,w-427",
  },
  {
    country: "Hong Kong",
    accommodations: "960",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721627849-c010b2d351287e89c8e49d7e9081b2cf.png?tr=dpr-2,q-75,w-427",
  },
]

export function DestinationGrid() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">🏢 Rediscover yourself in Asia and beyond</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <Card key={destination.country} className="overflow-hidden group rounded-t-lg rounded-b-none">
              <Link href="#" className="relative block">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.country}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <CardContent className="absolute inset-0 text-white p-6">
                  <h3 className="text-2xl font-bold">{destination.country}</h3>
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