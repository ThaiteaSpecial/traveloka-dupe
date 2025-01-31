"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CouponCard } from "./coupon-card"

const coupons = [
  {
    id: 1,
    title: "Kupon Diskon s.d Rp300rb",
    code: "HELLOSGCAID",
    description: "Berlaku untuk Pengguna Baru.",
    icon: "🎁",
  },
  {
    id: 2,
    title: "Diskon 8%",
    code: "JALANYUK",
    description: "min. transaksi Rp 500rb",
    icon: "🏨",
  },
  {
    id: 3,
    title: "Diskon s.d 8%",
    code: "JALANYUK",
    description: "min. transaksi Rp 300rb",
    icon: "✈️",
  },
  // Add more coupons as needed
]

export function CouponSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 300 // Width of one coupon card
    const scrollLeft = direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    })

    // Update scroll buttons visibility after scrolling
    setTimeout(() => {
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth)
      }
    }, 100)
  }

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
    // You could add a toast notification here
  }

  return (
    <div className="relative">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">🎫 Daftar untuk Menggunakan Kupon</h2>

      <div ref={scrollContainerRef} className="flex gap-4 overflow-x-hidden scroll-smooth">
        {coupons.map((coupon) => (
          <CouponCard
            key={coupon.id}
            title={coupon.title}
            code={coupon.code}
            description={coupon.description}
            icon={coupon.icon}
            onCopy={() => handleCopy(coupon.code)}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md z-10"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md z-10"
        onClick={() => scroll("right")}
        disabled={!canScrollRight}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default CouponSection