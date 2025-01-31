"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["Top Flight Routes", "Top Hotel Destinations", "For Your Connectivity", "Top Things to Do"]

const destinations = [
  ["Jakarta Hotels", "Singapore Hotels", "Palembang Hotels"],
  ["Bali Hotels", "Bogor Hotels", "Balikpapan Hotels"],
  ["Yogyakarta Hotels", "Surabaya Hotels", "Batam Hotels"],
  ["Malang Hotels", "Semarang Hotels", "Padang Hotels"],
  ["Bandung Hotels", "Medan Hotels", "Pekanbaru Hotels"],
]

export function InterestsSection() {
  const [activeCategory, setActiveCategory] = useState(1) // Default to "Top Hotel Destinations"

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">What interests you?</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === index ? "default" : "outline"}
              onClick={() => setActiveCategory(index)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {destinations.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map((destination, destIndex) => (
                <Button
                  key={destIndex}
                  variant="link"
                  className="w-full justify-start px-0 py-2 text-gray-600 hover:text-blue-600"
                >
                  {destination}
                </Button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default InterestsSection