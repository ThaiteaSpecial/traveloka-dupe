import { Star, MapPin, Wifi, Car, Coffee, PocketIcon as Pool, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

function HotelInfo() {
  return (
    <div className="grid grid-cols-2 gap-8">
      <div>
        <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg mb-6">
          <div className="bg-white rounded-lg p-3">
            <div className="text-3xl font-bold text-blue-600">9.0</div>
          </div>
          <div>
            <div className="text-lg font-semibold">Impressive</div>
            <Button variant="link" className="h-auto p-0 text-blue-600">
              From 6,309 verified guests reviews <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">What Guests Say About Their Stay</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-100">
              Kids Friendly (49)
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-100">
              Friendly Staffs (61)
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-100">
              Excellent Service (6)
            </Badge>
            <Badge variant="outline" className="bg-green-50 text-green-600 hover:bg-green-100">
              Tasty Breakfast (8)
            </Badge>
          </div>

          <div className="space-y-4 mt-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Intan R.</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                  <span className="text-blue-600">10 / 10</span>
                </div>
              </div>
              <p className="text-gray-600">
                The room was spacious and comfortable. The staffs were very friendly. Super clean and nice bathroom. The
                food was also delicious... 😋
              </p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Nurul W.</span>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-blue-600 text-blue-600" />
                  <span className="text-blue-600">9.7 / 10</span>
                </div>
              </div>
              <p className="text-gray-600">
                The strategic location, staff and services are really good, I got upgrade to larger room. Overall, It's
                a perfect stay! 👍
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">In the Area</h2>
          <Button variant="link" className="text-blue-600">
            See Map <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <div>Jl. Gatot Subroto No. 289, Buahbatu, Bandung,</div>
              <div>Jawa Barat, Indonesia, 40273</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Badge variant="secondary" className="bg-blue-50">
                Strategic Location
              </Badge>
              <Badge variant="secondary" className="bg-blue-50">
                Around public facility
              </Badge>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span>Trans Studio Bandung</span>
                <span className="text-muted-foreground">217 m</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Kiaracondong Station</span>
                <span className="text-muted-foreground">1.20 km</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Muhammadiyah Bandung Hospital</span>
                <span className="text-muted-foreground">1.58 km</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Main Facilities</h2>
            <Button variant="link" className="text-blue-600">
              Read More <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Wifi className="h-5 w-5 text-blue-600" />
              </div>
              <span>WiFi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Car className="h-5 w-5 text-blue-600" />
              </div>
              <span>Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Coffee className="h-5 w-5 text-blue-600" />
              </div>
              <span>Restaurant</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Pool className="h-5 w-5 text-blue-600" />
              </div>
              <span>Swimming Pool</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Clock className="h-5 w-5 text-blue-600" />
              </div>
              <span>24-Hour Front Desk</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-gray-600">
            Staying at The Trans Luxury Hotel is a good choice when you are visiting Buahbatu. 24-hours front desk is
            available to serve you, from check-in to check-out, or any assistance you need. Should you desire more, do
            not hesitate to ask the front desk, we are always ready to accommodate you. WiFi is available within public
            areas of the property to help you to stay connected with family and friends.
          </p>
          <Button variant="link" className="mt-2 h-auto p-0 text-blue-600">
            Read More <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HotelInfo