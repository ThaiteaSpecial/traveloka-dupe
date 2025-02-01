'use client'

import { FC, useState, useEffect } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Header } from "@/components/sections/header";
import { Button } from "@/components/ui/button";
import { Hotel } from "@/lib/types";
import { hotels } from "@/lib/data";
import SearchBar from "@/components/sections/search-bar";
import FilterSidebar from "@/components/sections/filter-sidebar";
import { Filter } from "lucide-react";
import HotelResults from "@/components/sections/hotel-results";

/**
 * Props for `SortBy`.
 */
export type SortByProps = SliceComponentProps<Content.SortBySlice>;

/**
 * Component for "SortBy" Slices.
 */
const SortBy: FC<SortByProps> = ({ slice }) => {

  const [filteredHotels, setFilteredHotels] = useState<Hotel[]>(hotels)
  const [sortBy, setSortBy] = useState("popularity")
  const [viewType, setViewType] = useState<"grid" | "list">("grid")
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: "",
    checkIn: new Date(),
    checkOut: new Date(),
    rooms: 1,
    guests: 1,
  })
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    // Load search params from localStorage
    const savedSearch = localStorage.getItem("lastSearch")
    if (savedSearch) {
      const parsed = JSON.parse(savedSearch)
      setSearchParams({
        ...parsed,
        checkIn: new Date(parsed.checkIn),
        checkOut: new Date(parsed.checkOut),
      })
    }
  }, [])

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params)
    localStorage.setItem("lastSearch", JSON.stringify(params))

    const filtered = hotels.filter((hotel) => {
      if (params.location && !hotel.location.toLowerCase().includes(params.location.toLowerCase())) {
        return false
      }
      if (params.rooms && hotel.rooms < params.rooms) {
        return false
      }
      return true
    })
    setFilteredHotels(filtered)
  }

  const handleFilterChange = (filters: any) => {
    const filtered = [...hotels]

    // Apply filters...
    // (Keep the existing filter logic)

    setFilteredHotels(filtered)
  }


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="min-h-screen flex flex-col bg-gray-50">
        <div style={{ marginTop: "6rem" }} className={`
          transition-all duration-300 transform
          ${isScrolled
            ? 'fixed top-0 left-0 right-0 z-50 translate-y-0'
            : 'relative -translate-y-0'}
          bg-white border-b shadow-sm
        `}>
          <div className="container mx-auto px-4">
            <SearchBar initialParams={searchParams} onSearch={handleSearch} />
          </div>
        </div>
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="flex gap-8">
            <aside className="w-80">
              <div className="sticky top-[140px]">
                <FilterSidebar onFilterChange={handleFilterChange} />
              </div>
            </aside>

            <div className="flex-1">
              <HotelResults
                hotels={filteredHotels}
                sortBy={sortBy}
                onSortChange={setSortBy}
                viewType={viewType}
                onViewChange={setViewType}
                searchParams={searchParams}
              />
            </div>
          </div>
        </main>
      </div>
      {/* Placeholder component for sort_by (variation: {slice.variation}) Slices */}
    </section>
  );
};

export default SortBy;
