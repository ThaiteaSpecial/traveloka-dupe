"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"

const amenities = [
  { name: "Free WiFi", count: 1500 },
  { name: "Breakfast", count: 1200 },
  { name: "Pool", count: 800 },
  { name: "Parking", count: 1000 },
  { name: "Air Conditioning", count: 1400 },
]

interface AmenitiesProps {
  onFilterChange: (amenities: string[]) => void
}

function Amenities({ onFilterChange }: AmenitiesProps) {
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])

  const handleAmenityChange = (amenity: string) => {
    const updatedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity]
    setSelectedAmenities(updatedAmenities)
    onFilterChange(updatedAmenities)
  }

  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-semibold mb-4">Amenities</h3>
      <div className="space-y-2">
        {amenities.map((amenity) => (
          <label key={amenity.name} className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={selectedAmenities.includes(amenity.name)}
                onCheckedChange={() => handleAmenityChange(amenity.name)}
              />
              <span>{amenity.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">({amenity.count})</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Amenities;