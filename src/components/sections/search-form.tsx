"use client"

import { useState, useEffect } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { MapPin, CalendarIcon, Users, Search } from "lucide-react"
import { format } from "date-fns"
import type { SearchParams, Destination } from "@/lib/types"
import { GuestSelector } from "./guest-selector"
import { useRouter } from "next/navigation"
import { useSearchStore } from '@/store/useSearchStore'

const initialPopularDestinations: Destination[] = [
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
    {
        name: "Singapore",
        location: "singapore",
        region: "",
        country: "Singapore",
        type: "Region",
        hotels: 749,
    },
]

interface SearchFormProps {
    onSearch: (params: SearchParams) => void
}

export function SearchForm({ onSearch }: SearchFormProps) {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState("hotels")
    const [isGuestSelectorOpen, setIsGuestSelectorOpen] = useState(false)
    const [isLocationOpen, setIsLocationOpen] = useState(false)

    const {
        location,
        dateRange,
        adults,
        children,
        rooms,
        lastSearch,
        popularDestinations,
        setLocation,
        setDateRange,
        setGuests,
        setLastSearch,
        search
    } = useSearchStore()

    const handleGuestUpdate = (type: "adults" | "children" | "rooms", value: number) => {
        if (type === "adults") setGuests(value, children, rooms)
        if (type === "children") setGuests(adults, value, rooms)
        if (type === "rooms") setGuests(adults, children, value)
    }

    const handleLocationSelect = (destination: Destination) => {
        setLocation(destination.location)
        setIsLocationOpen(false)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (dateRange?.from && dateRange?.to) {
            const searchData: Destination = {
                name: location,
                location: location,
                region: "Sample Region", 
                country: "Indonesia",
                type: "City",
                hotels: Math.floor(Math.random() * 5000) + 1000,
            }

            setLastSearch(searchData)

            const searchParams = {
                location,
                checkIn: dateRange.from,
                checkOut: dateRange.to,
                rooms,
                guests: adults + children,
            }

            // Update store with search params
            search(searchParams)
            
            // Call onSearch callback
            onSearch(searchParams)

            // Redirect to search page
            const urlSearchParams = new URLSearchParams({
                checkIn: dateRange.from.toISOString(),
                checkOut: dateRange.to.toISOString(),
                rooms: rooms.toString(),
                guests: (adults + children).toString()
            })

            router.push(`/search/${encodeURIComponent(location)}?${urlSearchParams.toString()}`)
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
                <span className="text-sm text-muted-foreground">{destination.hotels.toLocaleString()} hotels</span>
            </div>
        </button>
    )

    return (
        <div className="w-full">
            <div className="flex space-x-4 mb-4">
                <Button
                    variant={activeTab === "hotels" ? "default" : "ghost"}
                    onClick={() => setActiveTab("hotels")}
                    className="text-sm"
                >
                    Hotels
                </Button>
                <Button
                    variant={activeTab === "villa" ? "default" : "ghost"}
                    onClick={() => setActiveTab("villa")}
                    className="text-sm"
                >
                    Villa
                </Button>
                <Button
                    variant={activeTab === "apartment" ? "default" : "ghost"}
                    onClick={() => setActiveTab("apartment")}
                    className="text-sm"
                >
                    Apartment
                </Button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4">
                    <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
                        <PopoverTrigger asChild>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <Input
                                    type="text"
                                    placeholder="City, destination, or hotel name"
                                    className="pl-10"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent className="w-[400px] p-0" align="start">
                            <div className="p-4 border-b">
                                <div className="flex items-center gap-2 text-blue-500">
                                    <MapPin className="h-5 w-5" />
                                    <span className="font-semibold">Near me</span>
                                </div>
                            </div>
                            <ScrollArea className="h-[400px]">
                                <div className="p-4 space-y-4">
                                    {lastSearch && (
                                        <div>
                                            <h3 className="font-semibold mb-2">Your Last Search Result</h3>
                                            <DestinationItem destination={lastSearch} />
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="font-semibold mb-2">Popular Destination</h3>
                                        <div className="space-y-2">
                                            {initialPopularDestinations.map((destination, index) => (
                                                <DestinationItem key={index} destination={destination} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </ScrollArea>
                        </PopoverContent>
                    </Popover>

                    <div className="grid grid-cols-2 gap-4">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline" className="w-full justify-start text-left font-normal">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {dateRange.from ? (
                                        dateRange.to ? (
                                            <>
                                                {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                                            </>
                                        ) : (
                                            format(dateRange.from, "LLL dd, y")
                                        )
                                    ) : (
                                        <span>Check-in & Check-out Dates</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={dateRange.from}
                                    selected={dateRange}
                                    onSelect={setDateRange}
                                    numberOfMonths={2}
                                />
                            </PopoverContent>
                        </Popover>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal"
                                    onClick={() => setIsGuestSelectorOpen(true)}
                                >
                                    <Users className="mr-2 h-4 w-4" />
                                    {`${adults} Adult${adults > 1 ? "s" : ""}, ${children} Child${children > 1 ? "ren" : ""
                                        }, ${rooms} Room${rooms > 1 ? "s" : ""}`}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <GuestSelector
                                    adults={adults}
                                    children={children}
                                    rooms={rooms}
                                    onUpdate={handleGuestUpdate}
                                    onDone={() => setIsGuestSelectorOpen(false)}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </form>
        </div>
    )
}

export default SearchForm