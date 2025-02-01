import { Star } from "lucide-react"
import Link from "next/link"

function HotelHeader() {
  return (
    <div className="mb-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">The Trans Luxury Hotel</h1>
          <div className="flex items-center gap-2">
            <Link href="#" className="text-blue-600 hover:underline">
              Hotels
            </Link>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Total price starts from</div>
          <div className="text-2xl font-bold text-orange-500">Rp 2,670,023</div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 15.4L7.3 18L8.4 12.7L4 9.1L9.4 8.7L12 4L14.6 8.7L20 9.1L15.6 12.7L16.7 18L12 15.4Z" />
            </svg>
          </div>
          <span className="text-blue-600 font-medium">
            Traveloka Hotel Appreciation 2023: Exceptional Guest Experience
          </span>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
          <span className="text-blue-600">
            Great timing! Today's price is{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">lower than usual.</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default HotelHeader