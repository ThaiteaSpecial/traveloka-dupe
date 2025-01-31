import type { Hotel } from "./types"

export const hotels: Hotel[] = [
  {
    id: "1",
    name: "Grand Luxury Hotel",
    location: "Bandung",
    price: 1200000,
    rating: 4.5,
    image: "/placeholder.svg?height=200&width=300",
    rooms: 120,
  },
  {
    id: "2",
    name: "Mountain View Resort",
    location: "Bandung",
    price: 1500000,
    rating: 4.8,
    image: "/placeholder.svg?height=200&width=300",
    rooms: 85,
  },
  {
    id: "3",
    name: "City Center Hotel",
    location: "Jakarta",
    price: 900000,
    rating: 4.2,
    image: "/placeholder.svg?height=200&width=300",
    rooms: 150,
  },
  {
    id: "4",
    name: "Beach Paradise Resort",
    location: "Bali",
    price: 2500000,
    rating: 4.9,
    image: "/placeholder.svg?height=200&width=300",
    rooms: 200,
  },
]

export const locations = ["Bandung", "Jakarta", "Bali", "Surabaya", "Yogyakarta"]

