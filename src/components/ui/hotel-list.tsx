import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Hotel } from "@/lib/types"

interface HotelListProps {
  hotels: Hotel[]
}

export function HotelList({ hotels }: HotelListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {hotels.map((hotel) => (
        <Card key={hotel.id}>
          <Image
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name}
            width={300}
            height={200}
            className="w-full object-cover h-[200px]"
          />
          <CardContent className="p-4">
            <h3 className="font-semibold text-lg">{hotel.name}</h3>
            <p className="text-sm text-muted-foreground">{hotel.location}</p>
            <div className="flex items-center mt-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 text-sm">{hotel.rating}</span>
            </div>
            <p className="mt-2 font-semibold">IDR {hotel.price.toLocaleString("id-ID")} / night</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default HotelList