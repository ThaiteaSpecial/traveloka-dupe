"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["Top Flight Routes", "Top Hotel Destinations", "For Your Connectivity", "Top Things to Do"]

const destinations = [
  "Jakarta Hotels", "Singapore Hotels", "Palembang Hotels",
  "Bali Hotels", "Bogor Hotels", "Balikpapan Hotels", 
  "Yogyakarta Hotels", "Surabaya Hotels", "Batam Hotels",
  "Malang Hotels", "Semarang Hotels", "Padang Hotels",
  "Bandung Hotels", "Medan Hotels", "Pekanbaru Hotels"
]

const flights = [
  "Flight to Bali", "Flight to Singapore", "Flight to Lombok",
  "Flight to Jakarta", "Flight to Surabaya", "Flight to Kuala Lumpur",
  "Flight to Malang", "Flight to Medan", "Flight to Jogja",
  "Flight to Bangkok", "Flight to Hong Kong", "Flight to Semarang",
  "Flight to Bandung", "Flight to Tanjung Pandan", "Flight to Korea"
]

const connectivity = [
  "Health Insurance",
  "PayLater", 
  "Top Up",
  "Life Insurance",
  "Online Credit",
  "Data Package",
  "Car Insurance", 
  "Installment",
  "PLN",
  "Motorcycle Insurance",
  "Flight Installment", 
  "BPJS Kesehatan",
  "Schengen Visa Insurance",
  "Gold Investment",
  "Telkom",
  "Travel Insurance",
  "PDAM",
  "MultiFinance"
]

const activities = [
  "Universal Studios Singapore", "Gardens by the Bay", "Singapore Zoo",
  "Waterbom Bali", "Bali Safari Marine Park", "Tanah Lot Temple",
  "Tokyo Disneyland", "Mount Fuji Tour", "TeamLab Planets",
  "Everland Korea", "Nami Island Tour", "Lotte World",
  "Ocean Park Hong Kong", "Disneyland Hong Kong", "Ngong Ping 360"
]

export function InterestsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  const getActiveData = () => {
    const data = {
      0: flights,
      1: destinations,
      2: connectivity,
      3: activities
    }[activeCategory] || destinations

    // Split array into chunks of 3 for grid display
    const chunks = []
    for (let i = 0; i < data.length; i += Math.ceil(data.length / 3)) {
      chunks.push(data.slice(i, i + Math.ceil(data.length / 3)))
    }
    return chunks
  }

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">What interests you?</h2>
        <div className="flex flex-wrap gap-2 mb-6 border-b-2 border-gray-200">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`px-4 py-2 cursor-pointer transition-all duration-300 font-bold ${
                activeCategory === index 
                  ? "text-blue-500 border-b-4 border-blue-500 -mb-[2px] animate-[slideIn_0.3s_ease-out]" 
                  : "text-[rgba(104,113,118,1.00)] border-transparent hover:border-b-4 hover:border-blue-500"
              }`}
              onClick={() => setActiveCategory(index)}
            >
              {category}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {getActiveData().map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-6 animate-[slideInFromRight_0.3s_ease-out]">
              {column.map((item, itemIndex) => (
                <Button
                  key={itemIndex}
                  variant="link"
                  className="w-full justify-start px-0 py-2 text-gray-600 hover:text-blue-600"
                >
                  {item}
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