"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { MapPin, CalendarIcon, Users, Search, Building2 } from "lucide-react"
import { format } from "date-fns"
import type { SearchParams, Destination } from "@/lib/types"
import { GuestSelector } from "./guest-selector"
import { useSearchStore } from "@/store/useSearchStore"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const popularDestinations: Destination[] = [
  {
    name: "Bandung",
    location: "bandung",
    region: "West Java",
    country: "Indonesia",
    type: "City",
    hotels: 3951,
  },
  {
    name: "Yogyakarta",
    location: "yogyakarta",
    region: "Special Region of Yogyakarta",
    country: "Indonesia",
    type: "City",
    hotels: 2614,
  },
  {
    name: "Jakarta",
    location: "jakarta",
    region: "",
    country: "Indonesia",
    type: "Region",
    hotels: 6865,
  },
  {
    name: "Bali",
    location: "bali",
    region: "",
    country: "Indonesia",
    type: "Region",
    hotels: 12040,
  },
]

interface SearchBarProps {
  initialParams: SearchParams
  onSearch: (params: SearchParams) => void
}

function SearchBar({ initialParams, onSearch }: SearchBarProps) {
  const {
    location,
    dateRange,
    adults,
    children,
    rooms,
    setLocation,
    setDateRange,
    setGuests,
    search
  } = useSearchStore()

  const [isLocationOpen, setIsLocationOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [lastSearch, setLastSearch] = useState<Destination | null>(null)
  const [filteredDestinations, setFilteredDestinations] = useState(popularDestinations)

  useEffect(() => {
    const filtered = popularDestinations.filter(destination => 
      destination.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      destination.country.toLowerCase().includes(searchValue.toLowerCase()) ||
      destination.region.toLowerCase().includes(searchValue.toLowerCase())
    )
    setFilteredDestinations(filtered)
  }, [searchValue])

  const handleLocationSelect = (destination: Destination) => {
    setLocation(destination.location)
    setLastSearch(destination)
    setSearchValue(destination.name)
    setIsLocationOpen(false)
  }

  const handleGuestUpdate = (type: "adults" | "children" | "rooms", value: number) => {
    if (type === "adults") setGuests(value, children, rooms)
    if (type === "children") setGuests(adults, value, rooms)
    if (type === "rooms") setGuests(adults, children, value)
  }

  const handleSearch = () => {
    if (dateRange?.from && dateRange?.to) {
      const searchParams = {
        location,
        checkIn: dateRange.from,
        checkOut: dateRange.to,
        rooms,
        guests: adults + children,
      }

      search(searchParams)
      onSearch(searchParams)
    }
  }

  const DestinationItem = ({ destination }: { destination: Destination }) => (
    <button
      className="w-full flex items-center justify-between py-3 px-2 hover:bg-accent rounded-md transition-colors"
      onClick={() => handleLocationSelect(destination)}
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">{destination.name}</span>
          <Badge variant="outline" className="text-blue-500 bg-blue-50">
            {destination.type}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground text-left">
          {destination.region ? `${destination.region}, ` : ""}
          {destination.country}
        </p>
      </div>
      <div className="text-right">
        <span className="text-sm text-muted-foreground">
          {destination.hotels.toLocaleString()} hotels
        </span>
      </div>
    </button>
  )

  return (
    <div className="py-4 flex items-center gap-4">
      <div className="flex-1 grid grid-cols-3 gap-2">
        <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start font-normal">
              <MapPin className="mr-2 h-4 w-4" />
              {location || "Where are you going?"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-0" align="start">
            <div className="p-4 border-b">
              <Input
                placeholder="Search destinations..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full"
              />
            </div>
            <ScrollArea className="h-[400px]">
              <div className="p-4 space-y-4">
                {searchValue && filteredDestinations.length === 0 ? (
                  <div className="text-center py-4 text-muted-foreground">
                    No destinations found
                  </div>
                ) : (
                  <>
                    {!searchValue && lastSearch && (
                      <div>
                        <h3 className="font-semibold mb-2">Your Last Search Result</h3>
                        <DestinationItem destination={lastSearch} />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold mb-2">
                        {searchValue ? "Search Results" : "Popular Destinations"}
                      </h3>
                      <div className="space-y-2">
                        {(searchValue ? filteredDestinations : popularDestinations)
                          .map((destination, index) => (
                            <DestinationItem 
                              key={destination.location} 
                              destination={destination} 
                            />
                          ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </ScrollArea>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start font-normal">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {dateRange?.from && dateRange?.to
                ? `${format(dateRange.from, "MMM dd")} - ${format(dateRange.to, "MMM dd")}`
                : "Select dates"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={dateRange?.from || new Date()}
              selected={{
                from: dateRange?.from,
                to: dateRange?.to,
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
              {`${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${children > 1 ? "ren" : ""
                }, ${rooms} Room${rooms > 1 ? "s" : ""}`}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80" align="start">
            <GuestSelector
              adults={adults}
              children={children}
              rooms={rooms}
              onUpdate={handleGuestUpdate}
              onDone={() => { }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button
        onClick={handleSearch}
        className="bg-blue-custom hover:bg-blue-custom-dark font-semibold"
        disabled={!dateRange?.from || !dateRange?.to || !location}
      >
        <Search className="h-4 w-4 mr-2" />
        Search Hotels
      </Button>
    </div>
  )
}

export default SearchBar