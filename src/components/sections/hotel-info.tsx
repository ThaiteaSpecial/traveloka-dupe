import { Star, MapPin, Wifi, Car, Coffee, PocketIcon as Pool, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { PrismicRichText } from "@prismicio/react"
import { useState } from "react"

function HotelInfo({ hotel }: { hotel: any }) {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div>
                <div className="max-w-[395px] border border-gray-200 rounded-lg p-4 bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2024/12/13/1734060460929-07d3ce81447d2371cfa2bf9303b14bbb.svg?tr=q-75')] bg-no-repeat bg-top bg-contain relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent"></div>
                    <div className="relative flex flex-col sm:flex-row items-center gap-4 rounded-lg mb-6">
                        <div className="bg-white rounded-lg p-3">
                            <div className="text-2xl font-bold text-blue-custom">{hotel.review_ratings}</div>
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="text-lg font-semibold">Impressive</div>
                            <Button variant="link" className="h-auto p-0 text-blue-custom font-bold">
                                From 6,309 verified guests reviews <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="relative space-y-4">
                        <h2 className="text-base font-semibold">What Guests Say About Their Stay</h2>
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
                            <div className="space-y-2 border border-gray-200 p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-sm">Intan R.</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-blue-custom text-blue-custom" />
                                        <span className="text-blue-custom text-sm">10 / 10</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    The room was spacious and comfortable. The staffs were very friendly. Super clean and nice bathroom. The
                                    food was also delicious... 😋
                                </p>
                            </div>

                            <div className="space-y-2 border border-gray-200 p-4 rounded-lg">
                                <div className="flex items-center justify-between">
                                    <span className="font-medium text-sm">Nurul W.</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-blue-custom text-blue-custom" />
                                        <span className="text-blue-custom text-sm">9.7 / 10</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    The strategic location, staff and services are really good, I got upgrade to larger room. Overall, It's
                                    a perfect stay! 👍
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">In the Area</h2>
                        <Button variant="link" className="text-blue-custom p-0 font-semibold">
                            See Map <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 text-blue-custom mt-1 flex-shrink-0" />
                            <div>
                                {hotel.address}
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-wrap items-center gap-2 text-blue-custom mb-2">
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
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Main Facilities</h2>
                        <Button variant="link" className="text-blue-custom p-0 font-semibold">
                            Read More <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Wifi className="h-5 w-5 text-blue-custom" />
                            </div>
                            <span>WiFi</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Car className="h-5 w-5 text-blue-custom" />
                            </div>
                            <span>Parking</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Coffee className="h-5 w-5 text-blue-custom" />
                            </div>
                            <span>Restaurant</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Pool className="h-5 w-5 text-blue-custom" />
                            </div>
                            <span>Swimming Pool</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                                <Clock className="h-5 w-5 text-blue-custom" />
                            </div>
                            <span>24-Hour Front Desk</span>
                        </div>
                    </div>
                </div>

                <div className="col-span-3 border border-gray-200 rounded-lg p-4">
                    <div className={`relative ${!isExpanded ? "max-h-[200px] overflow-hidden" : ""}`}>
                        <PrismicRichText field={hotel.desc_hotel} />
                        {!isExpanded && (
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
                        )}
                    </div>
                    <Button 
                        variant="link" 
                        className="mt-2 h-auto p-0 text-blue-custom"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? "Show Less" : "Read More"} <ChevronRight className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HotelInfo