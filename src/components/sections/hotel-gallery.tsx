"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

function HotelGallery() {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[440px] mb-8">
      <div className="col-span-2 row-span-2 relative">
        <Image
          src="/placeholder.svg?height=440&width=660"
          alt="Hotel exterior"
          width={660}
          height={440}
          className="w-full h-full object-cover rounded-l-lg"
        />
      </div>
      <div className="relative">
        <Image
          src="/placeholder.svg?height=217&width=326"
          alt="Hotel pool"
          width={326}
          height={217}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative">
        <Image
          src="/placeholder.svg?height=217&width=326"
          alt="Hotel room"
          width={326}
          height={217}
          className="w-full h-full object-cover rounded-tr-lg"
        />
      </div>
      <div className="relative">
        <Image
          src="/placeholder.svg?height=217&width=326"
          alt="Hotel lobby"
          width={326}
          height={217}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative group">
        <Image
          src="/placeholder.svg?height=217&width=326"
          alt="Hotel restaurant"
          width={326}
          height={217}
          className="w-full h-full object-cover rounded-br-lg"
        />
        <Button
          variant="secondary"
          className="absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Camera className="mr-2 h-4 w-4" />
          See All Photos
        </Button>
      </div>
    </div>
  )
}

export default HotelGallery