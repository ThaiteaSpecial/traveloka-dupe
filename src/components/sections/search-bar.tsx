"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { MapPin, CalendarIcon, Users, Search } from "lucide-react"
import { format } from "date-fns"
import type { SearchParams } from "@/lib/types"
import { GuestSelector } from "./guest-selector"

interface SearchBarProps {
  initialParams: SearchParams
  onSearch: (params: SearchParams) => void
}

function SearchBar({ initialParams, onSearch }: SearchBarProps) {
  const [location, setLocation] = useState(initialParams.location)
  const [dateRange, setDateRange] = useState<{
    from: Date
    to: Date
  }>({
    from: initialParams.checkIn,
    to: initialParams.checkOut,
  })
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(initialParams.rooms)

  const handleGuestUpdate = (type: "adults" | "children" | "rooms", value: number) => {
    if (type === "adults") setAdults(value)
    if (type === "children") setChildren(value)
    if (type === "rooms") setRooms(value)
  }

  const handleSearch = () => {
    onSearch({
      location,
      checkIn: dateRange.from,
      checkOut: dateRange.to,
      rooms,
      guests: adults + children,
    })
  }

  return (
    <div className="py-4 flex items-center gap-4">
      <div className="flex-1 grid grid-cols-3 gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start font-normal">
              <MapPin className="mr-2 h-4 w-4" />
              {location || "Where are you going?"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 p-0" align="start">
            <div className="p-4">
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full p-2 border rounded"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange.from && dateRange.to
                ? `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd")}`
                : "Select dates"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange.from}
              selected={{
                from: dateRange.from,
                to: dateRange.to,
              }}
              onSelect={(range) => {
                if (range?.from && range?.to) {
                  setDateRange({ from: range.from, to: range.to })
                }
              }}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start font-normal">
              <Users className="mr-2 h-4 w-4" />
              {`${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${
                children > 1 ? "ren" : ""
              }, ${rooms} Room${rooms > 1 ? "s" : ""}`}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <GuestSelector
              adults={adults}
              children={children}
              rooms={rooms}
              onUpdate={handleGuestUpdate}
              onDone={() => {}}
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
        <Search className="h-4 w-4 mr-2" />
        Search Hotels
      </Button>
    </div>
  )
}

export default SearchBar