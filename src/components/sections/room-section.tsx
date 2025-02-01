"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info, Users, Bed, Bath, Wind, Cigarette } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function RoomSection() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">Available Room Types in The Trans Luxury Hotel</h2>

      {/* Coupon Banner */}
      <div className="bg-blue-600 text-white p-4 rounded-lg mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=24&width=24"
              alt="Coupon"
              width={24}
              height={24}
              className="text-white"
            />
          </div>
          <span>
            Log in now to use coupon code JALANYUK and save up to Rp1.000.000 with no min. purchase, for your first
            booking only!
          </span>
        </div>
        <Button variant="ghost" className="text-white hover:bg-white/20">
          <Info className="h-5 w-5" />
        </Button>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-2">
          <h3 className="font-semibold">Speed up your search by choosing what you need</h3>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <Checkbox
                checked={selectedFilters.includes("free-cancellation")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedFilters([...selectedFilters, "free-cancellation"])
                  } else {
                    setSelectedFilters(selectedFilters.filter((f) => f !== "free-cancellation"))
                  }
                }}
              />
              <span>Free Cancellation</span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox
                checked={selectedFilters.includes("large-bed")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedFilters([...selectedFilters, "large-bed"])
                  } else {
                    setSelectedFilters(selectedFilters.filter((f) => f !== "large-bed"))
                  }
                }}
              />
              <span className="flex items-center gap-1">
                Large Bed
                <Info className="h-4 w-4 text-muted-foreground" />
              </span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox
                checked={selectedFilters.includes("free-breakfast")}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedFilters([...selectedFilters, "free-breakfast"])
                  } else {
                    setSelectedFilters(selectedFilters.filter((f) => f !== "free-breakfast"))
                  }
                }}
              />
              <span>Free Breakfast</span>
            </label>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Price Display</span>
          <Select defaultValue="total">
            <SelectTrigger className="w-[260px]">
              <SelectValue placeholder="Select price display" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="total">Total price (incl. taxes & fees)</SelectItem>
              <SelectItem value="nightly">Price per night</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Room Card */}
      <Card className="p-6">
        <div className="grid grid-cols-[400px,1fr] gap-6">
          <div className="space-y-4">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Room preview"
                width={400}
                height={300}
                className="object-cover"
              />
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-sm font-medium">40.0</span>
                </div>
                <span>m²</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Cigarette className="h-4 w-4" />
                </div>
                <span>Smoking</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-gray-500" />
                <span>Bathtub</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-gray-500" />
                <span>Air conditioning</span>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              See Room Details
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Premier Smoking</h3>

            {/* Without Breakfast Option */}
            <div className="border-b pb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="font-medium mb-2">Premier Smoking Room Only</div>
                  <div className="text-muted-foreground">Without Breakfast</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Bed className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-muted-foreground">1 double bed or 2 single bed</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">Rp 2,951,077</div>
                    <div className="text-2xl font-bold text-orange-500">Rp 2,670,023</div>
                    <div className="text-sm text-muted-foreground">Include taxes & fees</div>
                    <Badge variant="destructive" className="mt-1">
                      Lower price than usual!
                    </Badge>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Choose</Button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Info className="h-4 w-4" />
                <span>This reservation is non-refundable.</span>
              </div>
            </div>

            {/* With Breakfast Option */}
            <div className="relative">
              <Badge className="absolute -top-3 right-32 bg-emerald-500">Cheapest with Breakfast</Badge>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium mb-2">Premier Smoking Room</div>
                  <div className="text-muted-foreground">Breakfast included for 1 pax</div>
                  <div className="flex items-center gap-2 mt-2">
                    <Bed className="h-5 w-5 text-gray-500" />
                    <span className="text-sm text-muted-foreground">1 double bed or 1 twin bed</span>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gray-500" />
                    <Users className="h-5 w-5 text-gray-500" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground line-through">Rp 3,253,740</div>
                    <div className="text-2xl font-bold text-orange-500">Rp 2,943,860</div>
                    <div className="text-sm text-muted-foreground">Include taxes & fees</div>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Choose</Button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                <Info className="h-4 w-4" />
                <span>This reservation is non-refundable.</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default RoomSection