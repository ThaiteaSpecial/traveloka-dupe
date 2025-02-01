"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LayoutGrid, List, MapPin, Star } from "lucide-react"
import type { Hotel, SearchParams } from "@/lib/types"

interface HotelResultsProps {
  hotels: Hotel[]
  sortBy: string
  onSortChange: (value: string) => void
  viewType: "grid" | "list"
  onViewChange: (value: "grid" | "list") => void
  searchParams: SearchParams
}

function HotelResults({
  hotels,
  sortBy,
  onSortChange,
  viewType,
  onViewChange,
  searchParams,
}: HotelResultsProps) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-xl font-semibold">{searchParams.location}</h1>
          <p className="text-sm text-muted-foreground">{hotels.length} properties found</p>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by:</span>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Highest popularity</SelectItem>
                <SelectItem value="price-asc">Price (low to high)</SelectItem>
                <SelectItem value="price-desc">Price (high to low)</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">View:</span>
            <div className="flex border rounded-md">
              <Button
                variant={viewType === "grid" ? "default" : "ghost"}
                size="sm"
                className="rounded-r-none"
                onClick={() => onViewChange("grid")}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewType === "list" ? "default" : "ghost"}
                size="sm"
                className="rounded-l-none"
                onClick={() => onViewChange("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className={`grid gap-6 ${viewType === "grid" ? "sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
        {hotels.map((hotel) => (
          <Card key={hotel.id} className={viewType === "list" ? "flex flex-col sm:flex-row" : ""}>
            <div className={viewType === "list" ? "sm:w-1/3" : ""}>
              <Image
                src={hotel.image || "/placeholder.svg"}
                alt={hotel.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
              />
            </div>
            <CardContent className={`p-4 ${viewType === "list" ? "sm:w-2/3" : ""}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{hotel.name}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {hotel.location}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{hotel.rating}</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">IDR {hotel.price.toLocaleString("id-ID")}</span>
                  <span className="text-sm text-muted-foreground">per night</span>
                </div>
                <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">Select Room</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default HotelResults;