import Image from "next/image"
import { Button } from "@/components/ui/button"

function HotelCtA() {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-900 to-blue-600 text-white">
      <div className="container mx-auto px-10 py-8 flex items-center justify-between">
        <div className="max-w-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to make up your mind?</h2>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 font-bold">
            Book Your Stay Now
          </Button>
        </div>
        <div className="hidden lg:block relative w-[360px] h-[180px]">
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