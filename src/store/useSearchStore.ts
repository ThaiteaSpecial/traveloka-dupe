import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Destination, SearchParams } from '@/lib/types'

interface DateRange {
  from: Date | undefined
  to: Date | undefined
}

interface SearchState {
  location: string
  dateRange: DateRange
  adults: number
  children: number
  rooms: number
  lastSearch: Destination | null
  popularDestinations: Destination[]
  
  setLocation: (location: string) => void
  setDateRange: (range: DateRange) => void
  setGuests: (adults: number, children: number, rooms: number) => void
  setLastSearch: (destination: Destination) => void
  search: (params: SearchParams) => void
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      location: '',
      dateRange: {
        from: undefined,
        to: undefined,
      },
      adults: 1,
      children: 0,
      rooms: 1,
      lastSearch: null,
      popularDestinations: [
        {
          name: "Bandung",
          location: "bandung",
          region: "West Java",
          country: "Indonesia",
          type: "City",
          hotels: 3951,
        },
        {
          name: "Yogyakarta",
          location: "yogyakarta",
          region: "Special Region of Yogyakarta",
          country: "Indonesia",
          type: "City",
          hotels: 2614,
        },
        {
          name: "Jakarta",
          location: "jakarta",
          region: "",
          country: "Indonesia",
          type: "Region",
          hotels: 6865,
        },
        {
          name: "Bali",
          location: "bali",
          region: "",
          country: "Indonesia",
          type: "Region",
          hotels: 12040,
        },
        {
          name: "Singapore",
          location: "singapore",
          region: "",
          country: "Singapore",
          type: "Region",
          hotels: 749,
        },
      ],
      
      setLocation: (location) => set({ location }),
      setDateRange: (range) => set({ dateRange: range }),
      setGuests: (adults, children, rooms) => set({ adults, children, rooms }),
      setLastSearch: (destination) => set({ lastSearch: destination }),
      search: (params) => set({
        location: params.location,
        dateRange: {
          from: params.checkIn,
          to: params.checkOut,
        },
        adults: Math.floor(params.guests / 2),
        children: params.guests % 2,
        rooms: params.rooms,
      }),
    }),
    {
      name: 'search-storage',
      version: 1,
      partialize: (state) => ({
        ...state,
        dateRange: state.dateRange ? {
          from: state.dateRange.from?.toISOString(),
          to: state.dateRange.to?.toISOString(),
        } : undefined,
      }),
      onRehydrateStorage: () => (state) => {
        if (state?.dateRange) {
          state.dateRange = {
            from: state.dateRange.from ? new Date(state.dateRange.from) : undefined,
            to: state.dateRange.to ? new Date(state.dateRange.to) : undefined,
          }
        }
      }
    }
  )
) 