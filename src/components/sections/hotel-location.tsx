import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2, Train, Cross, Ticket, MapPin } from "lucide-react"
import Image from "next/image"


function HotelLocation({ data }: { data: any }) {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">What's around {data.name_hotel}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="col-span-2">
                    <div className="relative h-[400px] rounded-lg overflow-hidden bg-gray-100">
                        <div className="absolute inset-0 bg-gray-200">
                            <Image
                                src="https://placehold.co/800x400/e5e7eb/a3a3a3?text=Map+Placeholder"
                                alt="Map"
                                width={800}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <Button className="absolute bottom-4 left-4 bg-white text-gray-900 hover:bg-gray-100">
                            Discover More Places
                        </Button>
                    </div>
                    <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {data.address}
                    </div>
                </div>

                <div className="col-span-2">
                    <div className="flex flex-wrap gap-2 mb-6">
                        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-50 flex items-center gap-2">
                            <Building2 className="h-4 w-4" />
                            Around public facility
                        </Badge>
                        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-50 flex items-center gap-2">
                            <Ticket className="h-4 w-4" />
                            Near recreation spot
                        </Badge>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-semibold mb-2">Nearby Places</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Building2 className="h-5 w-5 text-green-500" />
                                                <div>
                                                    <div className="font-medium">Masjid Agung Trans Studio Bandung</div>
                                                    <div className="text-sm text-muted-foreground">Sacred & Religious Site</div>
                                                </div>
                                            </div>
                                            <span>117 m</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Building2 className="h-5 w-5 text-blue-500" />
                                                <div>
                                                    <div className="font-medium">Fakultas Ekonomi dan Bisnis Univ...</div>
                                                    <div className="text-sm text-muted-foreground">Education</div>
                                                </div>
                                            </div>
                                            <span>479 m</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Cross className="h-5 w-5 text-red-500" />
                                                <div>
                                                    <div className="font-medium">Klinik Pratama BRIMEDIKA</div>
                                                    <div className="text-sm text-muted-foreground">Public Service</div>
                                                </div>
                                            </div>
                                            <span>1.12 km</span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Train className="h-5 w-5 text-orange-500" />
                                                <div>
                                                    <div className="font-medium">Kiaracondong Station</div>
                                                    <div className="text-sm text-muted-foreground">Transportation Hub</div>
                                                </div>
                                            </div>
                                            <span>1.20 km</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-1 border-l border-gray-200 pl-4">
                                    <h4 className="font-semibold mb-2">Popular in the Area</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Train className="h-5 w-5 text-orange-500" />
                                                <span>Kiaracondong Station</span>
                                            </div>
                                            <span>1.20 km</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Building2 className="h-5 w-5 text-blue-500" />
                                                <span>Trans Studio Bandung</span>
                                            </div>
                                            <span>217 m</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Cross className="h-5 w-5 text-red-500" />
                                                <span>Muhammadiyah Bandung Hospital</span>
                                            </div>
                                            <span>1.58 km</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <p className="text-sm text-muted-foreground mt-6">
                        Distances shown are based on straight line distances. Actual travel distances may vary.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HotelLocation