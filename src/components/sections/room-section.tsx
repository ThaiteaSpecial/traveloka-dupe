"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Info, Users, Bed, Bath, Wind, Cigarette } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function RoomSection({ data }: { data: any }) {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([])

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-6">Available Room Types in {data.name_hotel}</h2>
            {/* Filter Section */}
            <div className="flex items-center justify-between mb-6">
                <div className="space-y-2">
                    <h3 className="font-semibold">Speed up your search by choosing what you need</h3>
                    <div className="grid grid-cols-3 gap-20">
                        <label className="flex items-center gap-2">
                            <Checkbox
                                checked={selectedFilters.includes("free-cancellation")}
                                onCheckedChange={(checked) => {
                                    if (checked) {
                                        setSelectedFilters([...selectedFilters, "free-cancellation"])
                                    } else {
                                        setSelectedFilters(selectedFilters.filter((f) => f !== "free-cancellation"))
                                    }
                                }}
                            />
                            <span>Free Cancellation</span>
                        </label>
                        <label className="flex items-center gap-2">
                            <Checkbox
                                checked={selectedFilters.includes("large-bed")}
                                onCheckedChange={(checked) => {
                                    if (checked) {
                                        setSelectedFilters([...selectedFilters, "large-bed"])
                                    } else {
                                        setSelectedFilters(selectedFilters.filter((f) => f !== "large-bed"))
                                    }
                                }}
                            />
                            <span className="flex items-center gap-1">
                                Large Bed
                                <Info className="h-4 w-4 text-muted-foreground" />
                            </span>
                        </label>
                        <label className="flex items-center gap-2">
                            <Checkbox
                                checked={selectedFilters.includes("free-breakfast")}
                                onCheckedChange={(checked) => {
                                    if (checked) {
                                        setSelectedFilters([...selectedFilters, "free-breakfast"])
                                    } else {
                                        setSelectedFilters(selectedFilters.filter((f) => f !== "free-breakfast"))
                                    }
                                }}
                            />
                            <span>Free Breakfast</span>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col  items-start gap-2">
                    <span className="text-sm">Price Display</span>
                    <Select defaultValue="total">
                        <SelectTrigger className="w-[260px]">
                            <SelectValue placeholder="Select price display" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="total">Total price (incl. taxes & fees)</SelectItem>
                            <SelectItem value="nightly">Price per night</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Room Card */}
            <Card className="p-6 bg-[url('https://ik.imagekit.io/tvlk/image/imageResource/2023/12/22/1703230740804-7c3d1c3e64557331e6f5f66d7a28e262.svg?tr=dpr-2,h-420,q-75,w-467')] bg-no-repeat bg-left-top">
                <div className="grid grid-cols-[400px,1fr] gap-6">
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Premier Smoking</h3>
                        <div className="relative h-[222px]">
                            <Image
                                src="https://ik.imagekit.io/tvlk/generic-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/10040418-826a68d9a58f258544a494f7e6fd55f5.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,fo-auto,h-222,pr-true,q-40,w-320"
                                alt="Room preview"
                                width={320}
                                height={222}
                                className="object-cover rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col items-start gap-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <span className="text-xs font-medium">40.0</span>
                                </div>
                                <span className="text-sm">m²</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                    <Cigarette className="h-4 w-4" />
                                </div>
                                <span className="text-sm">Smoking</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <Bath className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Bathtub</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Wind className="h-5 w-5 text-gray-500" />
                                <span className="text-sm">Air conditioning</span>
                            </div>
                        </div>
                        <Button variant="ghost" className="text-sm font-semibold">
                            See Room Details
                        </Button>
                    </div>

                    <div className="space-y-6">
                        {/* Room Options Table */}
                        &nbsp;
                        <div className="border rounded-lg divide-y">
                            {/* Table Header */}
                            <div className="grid grid-cols-[2fr,1fr,auto] gap-8 p-4 bg-gray-50">
                                <div className="text-sm font-semibold text-gray-600">Room Option(s)</div>
                                <div className="text-sm font-semibold text-gray-600">Guest(s)</div>
                                <div className="text-sm font-semibold text-gray-600">Total price</div>
                            </div>

                            {/* With Breakfast Option */}
                            {
                                data?.rooms_options.map((room: any, index: number) => (
                                    <>
                                        <div className="p-6 relative">
                                            <div className="grid grid-cols-[2fr,1fr,auto] gap-8">
                                                <div>
                                                    <div className="text-sm font-medium mb-2 font-semibold">{room.title_room}</div>
                                                    <div className="text-sm text-muted-foreground">{room.sub_title_room}</div>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <Bed className="h-5 w-5 text-gray-500" />
                                                        <span className="text-xs text-muted-foreground">{room.bed_count} {room.bed_type}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                                                        <Info className="h-4 w-4" />
                                                        {
                                                            room.is_refund ? "Free cancellation available" : "This reservation is non-refundable"
                                                        }
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-center">
                                                    <div className="flex items-center gap-2">
                                                        {[...Array(room.guest_count)].map((_, i) => (
                                                            <Users key={i} className="h-5 w-5 text-gray-500" />
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end justify-center">
                                                    <div className="text-xs text-muted-foreground line-through">Rp {room.price.toLocaleString('id-ID')}</div>
                                                    <div className="text-xl font-bold text-orange-500">Rp {(room.price * 0.9).toLocaleString('id-ID')}</div>
                                                    <div className="text-xs text-muted-foreground">Include taxes & fees</div>
                                                    <Button className="bg-blue-custom font-semibold hover:bg-blue-700 text-sm mt-2">Choose</Button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Without Breakfast Option */}
                                        <div className="p-6">
                                            <div className="grid grid-cols-[2fr,1fr,auto] gap-8">
                                                <div>
                                                    <div className="text-sm font-medium mb-2 font-semibold">Premier Smoking Room Only</div>
                                                    <div className="text-sm text-muted-foreground">Without Breakfast</div>
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <Bed className="h-5 w-5 text-gray-500" />
                                                        <span className="text-xs text-muted-foreground">1 twin bed</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4">
                                                        <Info className="h-4 w-4" />
                                                        <span>This reservation is non-refundable.</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-center">
                                                    <div className="flex items-center gap-2">
                                                        <Users className="h-5 w-5 text-gray-500" />
                                                        <Users className="h-5 w-5 text-gray-500" />
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-end justify-center">
                                                    <div className="text-xs text-muted-foreground line-through">Rp 2,951,077</div>
                                                    <div className="text-xl font-bold text-orange-500">Rp 2,670,023</div>
                                                    <div className="text-xs text-muted-foreground">Include taxes & fees</div>
                                                    <Button className="bg-blue-custom font-semibold hover:bg-blue-700 text-sm mt-2">Choose</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RoomSection