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
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Swimming Pool",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Fitness Center",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Functional Hall",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    title: "Lobby",
    image: "/placeholder.svg?height=200&width=300",
  },
]

function HotelFacilities() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-6">All facilities in The Trans Luxury Hotel</h2>

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
              <div className="p-3 text-white font-medium">{facility.title}</div>
            </div>
          </div>
        ))}
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