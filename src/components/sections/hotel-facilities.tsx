import Image from "next/image"
import { Building, DoorClosed, Hotel } from "lucide-react"

const facilities = {
    public: [
        "Parking",
        "Coffee/tea in lobby",
        "Coffee shop",
        "Elevator",
        "24-hour room service",
        "Restaurant",
        "Breakfast restaurant",
        "Dinner restaurant",
        "Lunch restaurant",
        "Room service",
        "Safety deposit box",
        "WiFi in public area",
    ],
    room: [
        "Bathrobe",
        "Bathtub",
        "Cable TV",
        "Desk",
        "Hairdryer",
        "In-room safe",
        "Minibar",
        "Separate shower and tub",
        "Shower",
        "TV",
    ],
    services: [
        "Bellhop",
        "Concierge",
        "Doorman",
        "Front desk",
        "24-hour Receptionist",
        "24-hour security",
        "Laundry service",
        "Luggage storage",
        "Wedding service",
    ],
}

const facilityImages = [
    {
        title: "Bar, Cafe and Lounge",
        image: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10005852-c68f9d0451fc5240e511dccf2575e0dc.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
    },
    {
        title: "Swimming Pool",
        image: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10005852-63646a1f8368d05749ad73fd871e68a5.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
    },
    {
        title: "Fitness Center",
        image: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10005852-76ab21dca043326d416141b911fd6abb.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
    },
    {
        title: "Functional Hall",
        image: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10005852-2e1aeee605a86aad91866b4f2f9d570f.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
    },
    {
        title: "Lobby",
        image: "https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/10005852-a69312a1773bceb4761f41bf0b61bca1.jpeg?_src=imagekit&tr=dpr-2,c-at_max,f-jpg,h-360,pr-true,q-80,w-640",
    },
]

function HotelFacilities({ data }: { data: any }) {
    return (
        <div className="mt-8">
            <div>
                <h2 className="text-xl font-bold mb-6">All facilities in {data.name_hotel}</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
                    {facilityImages.map((facility) => (
                        <div key={facility.title} className="relative group">
                            <Image
                                src={facility.image || "/placeholder.svg"}
                                alt={facility.title}
                                width={300}
                                height={200}
                                className="w-full aspect-[4/3] object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/40 rounded-lg flex items-end">
                                <div className="p-3 text-white font-semibold">{facility.title}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Building className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">Public Facilities</h3>
                    </div>
                    <ul className="space-y-2">
                        {facilities.public.map((facility) => (
                            <li key={facility} className="text-gray-600">
                                {facility}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <DoorClosed className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">In-room Facilities</h3>
                    </div>
                    <ul className="space-y-2">
                        {facilities.room.map((facility) => (
                            <li key={facility} className="text-gray-600">
                                {facility}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Hotel className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold">Hotel Services</h3>
                    </div>
                    <ul className="space-y-2">
                        {facilities.services.map((service) => (
                            <li key={service} className="text-gray-600">
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HotelFacilities