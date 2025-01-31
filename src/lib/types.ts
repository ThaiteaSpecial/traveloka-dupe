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
  
  