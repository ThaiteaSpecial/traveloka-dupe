"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Star } from "lucide-react"

interface PopularFilterProps {
  onFilterChange: (filters: string[]) => void
}

function PopularFilter({ onFilterChange }: PopularFilterProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const handleFilterChange = (filter: string) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter]
    setSelectedFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Popular Filter</h3>
        <Button variant="ghost" size="sm" className="text-blue-600 h-auto p-0">
          See All
        </Button>
      </div>
      <div className="space-y-2">
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.includes("blessing")}
              onCheckedChange={() => handleFilterChange("blessing")}
            />
            <span>BLESSING GOOD DEALS</span>
          </div>
          <span className="text-sm text-muted-foreground">(203)</span>
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <Checkbox checked={selectedFilters.includes("promo")} onCheckedChange={() => handleFilterChange("promo")} />
            <span>Promo Domestik</span>
          </div>
          <span className="text-sm text-muted-foreground">(18)</span>
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={selectedFilters.includes("impressive")}
              onCheckedChange={() => handleFilterChange("impressive")}
            />
            <span className="flex items-center gap-1">8+ Impressive</span>
          </div>
          <span className="text-sm text-muted-foreground">(975)</span>
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <Checkbox checked={selectedFilters.includes("5star")} onCheckedChange={() => handleFilterChange("5star")} />
            <span className="flex items-center gap-1">
              5 <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </span>
          </div>
          <span className="text-sm text-muted-foreground">(18)</span>
        </label>
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-2">
            <Checkbox checked={selectedFilters.includes("4star")} onCheckedChange={() => handleFilterChange("4star")} />
            <span className="flex items-center gap-1">
              4 <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            </span>
          </div>
          <span className="text-sm text-muted-foreground">(137)</span>
        </label>
      </div>
    </div>
  )
}

export default PopularFilter;