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

const initialState = {
  location: '',
  dateRange: { from: undefined, to: undefined },
  adults: 1,
  children: 0,
  rooms: 1,
  lastSearch: null,
  popularDestinations: []
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      ...initialState,
      setLocation: (location: string) => set({ location }),
      setDateRange: (range: DateRange) => set({ dateRange: range }),
      setGuests: (adults: number, children: number, rooms: number) => 
        set({ adults, children, rooms }),
      setLastSearch: (destination: Destination) => 
        set({ lastSearch: destination }),
      search: (params: SearchParams) => {
        // Implement search logic here
        console.log('Searching with params:', params)
      }
    }),
    {
      name: 'search-storage'
    }
  )
) 