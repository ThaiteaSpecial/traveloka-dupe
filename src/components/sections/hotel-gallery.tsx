"use client"

import { PrismicNextImage } from "@prismicio/next"
import { Button } from "@/components/ui/button"
import { Camera } from "lucide-react"

function HotelGallery({ images }: { images: any }) {
  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[440px] mb-8">
      {images?.map((image: any, index: number) => {
        if (index === 0) {
          return (
            <div key={index} className="col-span-2 row-span-2 relative">
              <PrismicNextImage
                field={image?.placeholder_images}
                alt=""
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>
          )
        }
        
        if (index === 4) {
          return (
            <div key={index} className="relative group">
              <PrismicNextImage
                field={image?.placeholder_images}
                alt=""
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
          )
        }

        if (index === 2) {
          return (
            <div key={index} className="relative">
              <PrismicNextImage
                field={image?.placeholder_images}
                alt=""
                className="w-full h-full object-cover rounded-tr-lg"
              />
            </div>
          )
        }

        return (
          <div key={index} className="relative">
            <PrismicNextImage
              field={image?.placeholder_images}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )
      })}
    </div>
  )
}

export default HotelGallery