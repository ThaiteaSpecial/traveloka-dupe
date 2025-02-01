export interface Destination {
    name: string
    region: string
    country: string
    type: "City" | "Region"
    hotels: number
}

export interface SearchHistory {
    lastSearch: Destination | null
    popularDestinations: Destination[]
}


export interface Hotel {
    id: string
    name: string
    location: string
    price: number
    rating: number
    image: string
    rooms: number
}