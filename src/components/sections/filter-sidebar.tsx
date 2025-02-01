"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Building2 } from "lucide-react"
import RecentFilter from "@/components/filter-sections/recent-filter"
import PriceRange from "@/components/filter-sections/price-range"
import PopularFilter from "@/components/filter-sections/popular-filter"
import StarRating from "@/components/filter-sections/star-rating"
import Amenities from "@/components/filter-sections/amenities"

interface FilterSidebarProps {
    onFilterChange: (filters: any) => void
}

export function FilterSidebar({ onFilterChange }: FilterSidebarProps) {
    const [isSticky, setIsSticky] = useState(false)
    const popularFilterRef = useRef<HTMLDivElement>(null)
    const stickyTriggerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (popularFilterRef.current && stickyTriggerRef.current) {
                const triggerPosition = stickyTriggerRef.current.getBoundingClientRect().top
                setIsSticky(triggerPosition <= 0)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handlePriceChange = (priceRange: number[]) => {
        onFilterChange({ priceRange })
    }

    const handlePopularFilterChange = (filters: string[]) => {
        onFilterChange({ popularFilters: filters })
    }

    const handleStarRatingChange = (ratings: number[]) => {
        onFilterChange({ starRatings: ratings })
    }

    const handleAmenitiesChange = (amenities: string[]) => {
        onFilterChange({ amenities })
    }

    return (
        <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start gap-2">
                <Building2 className="h-4 w-4" />
                Explore on Map
            </Button>

            <RecentFilter />
            <PriceRange onPriceChange={handlePriceChange} />
            <div ref={stickyTriggerRef} />
            <div ref={popularFilterRef} className={`${isSticky ? "lg:sticky lg:top-4 z-10" : ""}`}>
                <PopularFilter onFilterChange={handlePopularFilterChange} />
            </div>
            <StarRating onFilterChange={handleStarRatingChange} />
            <Amenities onFilterChange={handleAmenitiesChange} />
        </div>
    )
}

export default FilterSidebar;