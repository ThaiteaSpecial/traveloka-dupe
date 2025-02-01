"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CouponCard } from "@/components/sections/coupon-card"

const coupons = [
  {
    id: 1,
    title: "Kupon Diskon s.d Rp300rb",
    code: "HELLOSGCAID",
    description: "Berlaku untuk Pengguna Baru.",
    icon: "https://ik.imagekit.io/tvlk/image/imageResource/2024/09/11/1726051216161-23d3b1bf58d596e5a11ddd39e8fc35c9.png?tr=dpr-2,q-75,w-48,h-48",
  },
  {
    id: 2,
    title: "Diskon 8%",
    code: "JALANYUK",
    description: "min. transaksi Rp 500rb",
    icon: "https://ik.imagekit.io/tvlk/image/imageResource/2024/09/11/1726051216161-23d3b1bf58d596e5a11ddd39e8fc35c9.png?tr=dpr-2,q-75,w-48,h-48",
  },
  {
    id: 3,
    title: "Diskon s.d 8%",
    code: "JALANYUK",
    description: "min. transaksi Rp 300rb",
    icon: "https://ik.imagekit.io/tvlk/image/imageResource/2024/09/11/1726051216161-23d3b1bf58d596e5a11ddd39e8fc35c9.png?tr=dpr-2,q-75,w-48,h-48",
  },
  {
    id: 4,
    title: "Diskon s.d 8%",
    code: "JALANYUK",
    description: "min. transaksi Rp 300rb",
    icon: "https://ik.imagekit.io/tvlk/image/imageResource/2024/09/11/1726051216161-23d3b1bf58d596e5a11ddd39e8fc35c9.png?tr=dpr-2,q-75,w-48,h-48",
  },
  {
    id: 5,
    title: "Diskon s.d 8%",
    code: "JALANYUK",
    description: "min. transaksi Rp 300rb",
    icon: "https://ik.imagekit.io/tvlk/image/imageResource/2024/09/11/1726051216161-23d3b1bf58d596e5a11ddd39e8fc35c9.png?tr=dpr-2,q-75,w-48,h-48",
  },
]

export function CouponSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

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

    const scrollAmount = 400 // Width of one coupon card
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

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="relative py-8">
      <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2024/09/04/1725447475210-6886260457851a5434e89e2220fa78e7.png?_src=imagekit&tr=dpr-2,q-40,h-24" alt="Coupon" width={24} height={24} />
        Daftar untuk Menggunakan Kupon
      </h2>

      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-hidden scroll-smooth max-w-[1240px] mx-auto"
        onScroll={updateScrollButtons}
      >
        {coupons.map((coupon) => (
          <CouponCard
            key={coupon.id}
            title={coupon.title}
            code={coupon.code}
            subtitle={coupon.description}
            icon={coupon.icon}
            className="flex-shrink-0"
          />
        ))}
      </div>

      {coupons.length > 3 && (
        <>
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-[60%] -translate-y-1/2 bg-white/80 hover:bg-white shadow-md z-10 rounded-full"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-[60%] -translate-y-1/2 bg-white/80 hover:bg-white shadow-md z-10 rounded-full"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </>
      )}
    </div>
  )
}

export default CouponSection