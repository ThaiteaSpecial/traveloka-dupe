"use client"

import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import PriceRange from "@/components/filter-sections/price-range"
import StarRating from "@/components/filter-sections/star-rating"

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

    const handleStarRatingChange = (ratings: number[]) => {
        onFilterChange({ starRatings: ratings })
    }


    return (
        <div className="space-y-4">
            <Button 
                variant="outline" 
                className="flex flex-col items-center justify-center w-full h-[125px] gap-2 bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2024/09/05/1725509884357-7c1a5596fb0e685b4d41bee6ba3b3edd.svg?tr=q-75')] bg-no-repeat bg-cover"
            >
                <span className="p-2 rounded-full text-white font-bold text-lg bg-[linear-gradient(136.94deg,#024590_0%,#0071CE_46.1%,#0A9AF2_96.84%)]">Explore on Map</span>
            </Button>
            <PriceRange onPriceChange={handlePriceChange} />
            <div ref={stickyTriggerRef} />
            <StarRating onFilterChange={handleStarRatingChange} />
        </div>
    )
}

export default FilterSidebar;