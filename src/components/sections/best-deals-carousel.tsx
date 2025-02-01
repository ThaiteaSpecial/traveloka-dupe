"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Plane, Building2, Train, Bus, Car, MapPin } from "lucide-react"

const categories = [
    { id: "flight", label: "Flight", icon: Plane },
    { id: "hotels", label: "Hotels", icon: Building2 },
    { id: "trains", label: "Trains", icon: Train },
    { id: "bus", label: "Bus & Travel", icon: Bus },
    { id: "cars", label: "Cars", icon: Car },
    { id: "things", label: "Things to Do", icon: MapPin },
]

const deals = [
    {
        id: 1,
        image: "https://ik.imagekit.io/tvlk/image/imageResource/2024/11/01/1730446426399-2a19107787b51b9e5b4d94a42d3bb6a2.png?tr=dpr-2,q-75,w-427",
        title: "Blessing Good Deals",
    },
    {
        id: 2,
        image: "https://ik.imagekit.io/tvlk/image/imageResource/2024/11/07/1730950505746-21ba1c3ee9e55048cc1a1c92c39ddc82.png?tr=dpr-2,q-75,w-427",
        title: "Domestic Promo",
    },
    {
        id: 3,
        image: "https://ik.imagekit.io/tvlk/image/imageResource/2024/11/28/1732767367347-fb48618f0088c784925ad8820fb6b92a.png?tr=dpr-2,q-75,w-427",
        title: "International Deals",
    },
    {
        id: 4,
        image: "https://ik.imagekit.io/tvlk/image/imageResource/2024/12/19/1734597449059-99dc1b3ed7ca39d77a65af4ee14ece56.png?tr=dpr-2,q-75,w-427",
        title: "Special Offer",
    },
]

export function BestDealsCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)
    const [activeCategory, setActiveCategory] = useState("flight")
    const [currentIndex, setCurrentIndex] = useState(0)

    const updateScrollButtons = () => {
        const container = scrollContainerRef.current
        if (container) {
            const isAtStart = container.scrollLeft <= 0
            const isAtEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth
            setCanScrollLeft(!isAtStart)
            setCanScrollRight(!isAtEnd)
        }
    }

    const scroll = (direction: "left" | "right") => {
        const container = scrollContainerRef.current
        if (!container) return

        const scrollAmount = container.clientWidth / 3 // One third of container width
        const newScrollLeft = direction === "left"
            ? Math.max(0, container.scrollLeft - scrollAmount)
            : Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount)

        container.scrollTo({
            left: newScrollLeft,
            behavior: "smooth",
        })

        setCanScrollLeft(newScrollLeft > 0)
        setCanScrollRight(newScrollLeft < container.scrollWidth - container.clientWidth)
    }

    return (
        <section className="py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">💰 Best deals for a price-less travel!</h2>

                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <button
                                key={category.id}
                                className={`inline-flex items-center gap-2 rounded-full font-bold px-4 py-2 transition-colors ${activeCategory === category.id
                                    ? "bg-blue-500 text-white"
                                    : "bg-white border text-[#0194F3] border-gray-200 hover:bg-gray-50"
                                    }`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <Icon className="h-4 w-4" />
                                {category.label}
                            </button>
                        )
                    })}
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-4 overflow-x-hidden scroll-smooth"
                            onScroll={updateScrollButtons}
                        >
                            {deals.map((deal) => (
                                <div key={deal.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                                    <Card className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-colors">
                                        <Image
                                            src={deal.image || "/placeholder.svg"}
                                            alt={deal.title}
                                            width={600}
                                            height={300}
                                            className="w-full h-48 object-cover"
                                        />
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {canScrollLeft && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md z-10 rounded-full"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                    )}

                    {canScrollRight && (
                        <Button
                            variant="outline"
                            size="icon"
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md z-10 rounded-full"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    )}
                </div>

                <div className="mt-8 text-center cursor-pointer">
                    <div className="p-2 rounded-md text-[#0194F3] bg-[#F7F9FA] hover:bg-[#F7F9FA] font-bold w-[200px] mx-auto">
                        See All Promos <ChevronRight className="ml-1 h-4 w-4 inline" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BestDealsCarousel