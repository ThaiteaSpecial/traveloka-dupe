"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import * as SliderPrimitive from "@radix-ui/react-slider"

interface PriceRangeProps {
  onPriceChange: (range: number[]) => void
}

function PriceRange({ onPriceChange }: PriceRangeProps) {
  const [priceRange, setPriceRange] = useState([0, 16000000])

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value)
    onPriceChange(value)
  }

  return (
    <div className="bg-white rounded-lg border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">Price Range</h3>
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 h-auto p-0"
          onClick={() => handlePriceChange([0, 16000000])}
        >
          Reset
        </Button>
      </div>
      <p className="text-sm text-muted-foreground mb-4">Per room, per night</p>
      <div className="space-y-4">
        <Slider
          value={priceRange}
          min={0}
          max={16000000}
          step={100000}
          onValueChange={handlePriceChange}
          className="relative"
        >
          <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
        </Slider>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handlePriceChange([Number.parseInt(e.target.value), priceRange[1]])}
              className="w-full"
              placeholder="IDR 0"
            />
          </div>
          <div className="flex-1">
            <Input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handlePriceChange([priceRange[0], Number.parseInt(e.target.value)])}
              className="w-full"
              placeholder="IDR 16.000.000"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PriceRange;