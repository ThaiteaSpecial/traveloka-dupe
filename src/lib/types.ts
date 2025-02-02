export interface Destination {
    name: string
    location: string
    region: string
    country: string
    type: "City" | "Region"
    hotels: number
}

export interface SearchHistory {
    lastSearch: Destination | null
    popularDestinations: Destination[]
}

export interface SearchParams {
  location: string
  checkIn: Date
  checkOut: Date
  rooms: number
  guests: number
}

export interface Hotel {
  id_hotel: number;
  name: string;
  travel_rating: string;
  rating: number;
  tag: string;
  discount: boolean;
  price_ori: number;
  price_discount: number | null;
  travel_review_origin: string;
  type: string;
  date_available: string;
  room_available: number;
  tax_fee: number;
  address: string;
  mean_review: number | null;
}