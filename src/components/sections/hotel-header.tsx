import { Star } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

function HotelHeader({ hotel }: { hotel: any }) {
  const scrollToRooms = () => {
    const roomsSection = document.getElementById('rooms-section')
    if (roomsSection) {
      roomsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="mb-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-0 mb-4">
        <div>
          <h1 className="text-2xl sm:text-[24px] font-bold mb-2">{hotel.name_hotel}</h1>
          <div className="flex items-center gap-2">
            <Link href="#" className="text-blue-600 hover:underline rounded-full px-2 py-1 bg-blue-50 text-xs font-normal">
              Hotels
            </Link>
            <div className="flex items-center">
              {Array.from({ length: +hotel.ratings }).map((_, i) => (
                <Star key={i} className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Total price starts from</div>
            <div className="text-xl sm:text-2xl font-bold text-orange-500">Rp {new Intl.NumberFormat('id-ID').format(hotel.price)}</div>
          </div>
          <Button 
            size="lg" 
            className="px-4 py-2 bg-[rgb(255,94,31)] text-white rounded-lg hover:bg-[rgb(230,85,28)] transition-colors font-bold"
            onClick={scrollToRooms}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HotelHeader