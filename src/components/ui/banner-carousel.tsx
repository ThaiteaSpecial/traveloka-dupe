"use client"

import { useState } from "react"
import Image from "next/image"

const banners = [
  {
    id: 1,
    title: "Blessing Good Deals",
    image: "/placeholder.svg?height=440&width=1920",
    link: "#",
  },
  {
    id: 2,
    title: "Special Promo",
    image: "/placeholder.svg?height=440&width=1920",
    link: "#",
  },
  {
    id: 3,
    title: "Holiday Deals",
    image: "/placeholder.svg?height=440&width=1920",
    link: "#",
  },
]

export function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === banners.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? banners.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative w-full overflow-hidden rounded-lg aspect-[48/11]">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="w-full flex-shrink-0">
            <Image
              src={banner.image || "/placeholder.svg"}
              alt={banner.title}
              width={1920}
              height={440}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default BannerCarousel