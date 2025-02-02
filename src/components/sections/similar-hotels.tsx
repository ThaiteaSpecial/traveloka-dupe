"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react"

const similarHotels = [
  {
    id: 1,
    name: "Mason Pine Hotel Bandung",
    location: "Padalarang",
    rating: 8.8,
    reviews: 2759,
    image: "/placeholder.svg?height=200&width=300",
    price: 2250000,
    originalPrice: 2362499,
  },
  {
    id: 2,
    name: "Mercure Bandung City Centre",
    location: "Asia Afrika",
    rating: 8.6,
    reviews: 2995,
    image: "/placeholder.svg?height=200&width=300",
    price: 988000,
    originalPrice: 1139506,
  },
  {
    id: 3,
    name: "Pullman Bandung Grand Central",
    location: "Cibeuying",
    rating: 8.8,
    reviews: 1336,
    image: "/placeholder.svg?height=200&width=300",
    price: 2199529,
    originalPrice: 2199529,
  },
  {
    id: 4,
    name: "Four Points by Sheraton Bandung",
    location: "Dago",
    rating: 8.8,
    reviews: 2286,
    image: "/placeholder.svg?height=200&width=300",
    price: 1815000,
    originalPrice: 1669139,
    exclusiveDeal: true,
  },
]

function SimilarHotels() {
  return (
    <div className="bg-blue-50/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Other Accommodations You Might Like</h2>
            <p className="text-muted-foreground">Similar accommodations where other guests were also staying in</p>
          </div>
          <Select defaultValue="total">
            <SelectTrigger className="w-[260px]">
              <SelectValue placeholder="Price Display" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="total">Total price (incl. taxes & fees)</SelectItem>
              <SelectItem value="nightly">Price per night</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {similarHotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden">
              <div className="relative">
                {hotel.exclusiveDeal && <Badge className="absolute top-2 right-2 bg-red-500">Exclusive Deal</Badge>}
                <Image
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">{hotel.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-muted-foreground">{hotel?.location}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 font-medium">{hotel.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">/ 10 ({hotel.reviews})</span>
                </div>
                <div className="text-right">
                  {hotel.originalPrice > hotel.price && (
                    <div className="text-sm text-muted-foreground line-through">
                      Rp {hotel.originalPrice.toLocaleString("id-ID")}
                    </div>
                  )}
                  <div className="text-lg font-bold">Rp {hotel.price.toLocaleString("id-ID")}</div>
                  <div className="text-sm text-muted-foreground">Include taxes & fees</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Link href="#" className="text-blue-600 hover:underline">
            See Other Accommodations in Bandung (3950)
          </Link>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SimilarHotels