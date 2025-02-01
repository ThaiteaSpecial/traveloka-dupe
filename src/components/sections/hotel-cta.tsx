import Image from "next/image"
import { Button } from "@/components/ui/button"

function HotelCtA() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto px-4 py-12 flex items-center justify-between">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold mb-6">Ready to make up your mind?</h2>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Book Your Stay Now
          </Button>
        </div>
        <div className="hidden lg:block relative w-[600px] h-[300px]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OazjG15BzbZxHQ1FMGyTrfRZZatZ4s.png"
            alt="The Trans Luxury Hotel exterior"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default HotelCtA