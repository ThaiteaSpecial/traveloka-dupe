"use client"

import { useState } from "react"
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
        image: "/placeholder.svg?height=300&width=600",
        title: "Blessing Good Deals",
    },
    {
        id: 2,
        image: "/placeholder.svg?height=300&width=600",
        title: "Domestic Promo",
    },
    {
        id: 3,
        image: "/placeholder.svg?height=300&width=600",
        title: "International Deals",
    },
    {
        id: 4,
        image: "/placeholder.svg?height=300&width=600",
        title: "Special Offer",
    },
    {
        id: 5,
        image: "/placeholder.svg?height=300&width=600",
        title: "Last Minute Deals",
    },
]

export function BestDealsCarousel() {
    const [activeCategory, setActiveCategory] = useState("flight")
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (deals.length - 2))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (deals.length - 2)) % (deals.length - 2))
    }

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">💰 Best deals for a price-less travel!</h2>

                <div className="flex flex-wrap gap-2 mb-8">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <Button
                                key={category.id}
                                variant={activeCategory === category.id ? "default" : "outline"}
                                className="gap-2"
                                onClick={() => setActiveCategory(category.id)}
                            >
                                <Icon className="h-4 w-4" />
                                {category.label}
                            </Button>
                        )
                    })}
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-300 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
                        >
                            {deals.map((deal) => (
                                <div key={deal.id} className="w-full md:w-1/3 flex-shrink-0 px-2">
                                    <Card className="overflow-hidden">
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

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>

                <div className="mt-8 text-center">
                    <Button variant="outline" className="text-blue-600">
                        See All Promos →
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default BestDealsCarousel