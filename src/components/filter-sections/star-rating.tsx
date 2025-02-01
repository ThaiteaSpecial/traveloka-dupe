"use client"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"

interface StarRatingProps {
  onFilterChange: (ratings: number[]) => void
}

function StarRating({ onFilterChange }: StarRatingProps) {
  const [selectedRatings, setSelectedRatings] = useState<number[]>([])

  const handleRatingChange = (rating: number) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter((r) => r !== rating)
      : [...selectedRatings, rating]
    setSelectedRatings(updatedRatings)
    onFilterChange(updatedRatings)
  }

  return (
    <div className="bg-white rounded-lg border p-4">
      <h3 className="font-semibold mb-4">Star Rating</h3>
      <div className="space-y-2">
        {[5, 4, 3, 2, 1].map((rating) => (
          <label key={rating} className="flex items-center justify-between cursor-pointer">
            <div className="flex items-center gap-2">
              <Checkbox checked={selectedRatings.includes(rating)} onCheckedChange={() => handleRatingChange(rating)} />
              <span className="flex items-center gap-1">
                {rating} <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              </span>
            </div>
            <span className="text-sm text-muted-foreground">({rating * 100})</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default StarRating;