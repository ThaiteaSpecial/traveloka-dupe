"use client"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const guides = [
  {
    city: "Bali",
    country: "Indonesia",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809479776-4e83255f3e45c75740764c4801e5c855.png?tr=dpr-2,q-75,w-256",
  },
  {
    city: "Bangkok",
    country: "Thailand",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809484756-eac5adc8558e79ba30b66cc733c95346.png?tr=dpr-2,q-75,w-256",
  },
  {
    city: "Seoul",
    country: "South Korea",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809489668-45a4ab273a1516079678f3b9422e8c2c.png?tr=dpr-2,q-75,w-256",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809496797-b78633edbe34845ae1f806c5123118e7.png?tr=dpr-2,q-75,w-256",
  },
  {
    city: "Liverpool",
    country: "United Kingdom",
    image: "https://ik.imagekit.io/tvlk/image/imageResource/2023/06/15/1686809501129-4f0665211c17df41a4f99a41cbf4b1d6.png?tr=dpr-2,q-75,w-256",
  },
]

export function TravelGuides() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">🔭 International escapes: get the guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1">
          {guides.map((guide) => (
            <Card key={guide.city} className="overflow-hidden group w-[232px] h-[309px] border-t border-x-0 border-b-0 rounded-t-lg rounded-b-none">
              <Link href="#" className="relative block h-full">
                <Image
                  src={guide.image || "/placeholder.svg"}
                  alt={`${guide.city}, ${guide.country}`}
                  width={232}
                  height={309}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
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